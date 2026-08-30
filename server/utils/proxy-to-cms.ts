import type { H3Event } from 'h3'
import { getRequestURL, proxyRequest } from 'h3'

export function proxyToCms(event: H3Event, withAuthorization = false, upstreamPath?: string) {
    const config = useRuntimeConfig(event)
    const requestUrl = getRequestURL(event)
    const target = new URL(
        upstreamPath || `${requestUrl.pathname}${requestUrl.search}`,
        config.apiProxyTarget,
    ).toString()
    const headers = withAuthorization && config.apiBearerToken
        ? {authorization: `Bearer ${config.apiBearerToken}`}
        : undefined

    return proxyRequest(event, target, {headers})
}
