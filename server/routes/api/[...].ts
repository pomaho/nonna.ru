import { createError, defineEventHandler, getMethod, getRequestURL } from 'h3'
import { ApiContractError, buildCmsApiTarget } from '../../utils/api-contract.mjs'
import { proxyToCms } from '../../utils/proxy-to-cms'

export default defineEventHandler((event) => {
    try {
        const requestUrl = event.node.req.url || getRequestURL(event)
        const upstreamPath = buildCmsApiTarget(getMethod(event), requestUrl)
        return proxyToCms(event, true, upstreamPath)
    } catch (error) {
        if (error instanceof ApiContractError) {
            throw createError({
                statusCode: error.statusCode,
                statusMessage: error.message,
            })
        }
        throw error
    }
})
