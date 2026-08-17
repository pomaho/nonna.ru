import type { H3Event } from 'h3'
import { getRequestURL, proxyRequest } from 'h3'

export function proxyToCms(event: H3Event, withAuthorization = false) {
    const config = useRuntimeConfig(event)
    const requestUrl = getRequestURL(event)
    const target = new URL(`${requestUrl.pathname}${requestUrl.search}`, config.apiProxyTarget).toString()
    const headers = withAuthorization && config.apiBearerToken
        ? {authorization: `Bearer ${config.apiBearerToken}`}
        : undefined

    return proxyRequest(event, target, {headers})
}
