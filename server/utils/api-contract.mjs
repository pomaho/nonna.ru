const COLLECTION_PATHS = new Set([
    '/contacts',
    '/site-news-many',
    '/parquets',
    '/woods',
    '/projects',
    '/type-of-properties',
])

const DETAIL_PATH = /^\/(?:parquets|projects|site-news-many)\/[1-9]\d*$/
const ALLOWED_QUERY_PARAMETERS = new Set(['locale', 'populate'])
const ALLOWED_LOCALES = new Set(['ru', 'en'])

export class ApiContractError extends Error {
    constructor(statusCode, message) {
        super(message)
        this.name = 'ApiContractError'
        this.statusCode = statusCode
    }
}

function rejectEncodedOrAmbiguousPath(rawPathname) {
    if (rawPathname.includes('%') || rawPathname.includes('\\') || rawPathname.includes('//')) {
        throw new ApiContractError(400, 'Encoded or ambiguous API paths are not allowed')
    }
}

function validateQuery(searchParams) {
    const seen = new Set()

    for (const [name, value] of searchParams) {
        if (!ALLOWED_QUERY_PARAMETERS.has(name) || name.includes('[') || name.includes(']')) {
            throw new ApiContractError(400, `Unsupported API query parameter: ${name}`)
        }

        if (seen.has(name)) {
            throw new ApiContractError(400, `Duplicate API query parameter: ${name}`)
        }
        seen.add(name)

        if (name === 'locale' && !ALLOWED_LOCALES.has(value)) {
            throw new ApiContractError(400, 'locale must be ru or en')
        }

        if (name === 'populate' && value !== '*') {
            throw new ApiContractError(400, 'populate must be the literal *')
        }
    }
}

export function buildCmsApiTarget(method, requestUrl) {
    const normalizedMethod = String(method || '').toUpperCase()
    if (normalizedMethod !== 'GET' && normalizedMethod !== 'HEAD') {
        throw new ApiContractError(405, 'Only GET and HEAD are allowed')
    }

    const rawRequestUrl = requestUrl instanceof URL
        ? `${requestUrl.pathname}${requestUrl.search}`
        : String(requestUrl)
    rejectEncodedOrAmbiguousPath(rawRequestUrl.split('?', 1)[0])

    const url = requestUrl instanceof URL
        ? requestUrl
        : new URL(rawRequestUrl, 'http://request.invalid')
    const rawPathname = url.pathname

    if (!rawPathname.startsWith('/api/')) {
        throw new ApiContractError(404, 'Unknown API path')
    }

    const cmsPath = rawPathname.slice('/api'.length)
    const isCollection = COLLECTION_PATHS.has(cmsPath)
    if (!isCollection && !DETAIL_PATH.test(cmsPath)) {
        throw new ApiContractError(404, 'Unknown API path')
    }

    validateQuery(url.searchParams)

    const upstream = new URL(`/api${cmsPath}`, 'http://cms.invalid')
    for (const [name, value] of url.searchParams) {
        upstream.searchParams.append(name, value)
    }

    if (isCollection) {
        upstream.searchParams.set('pagination[pageSize]', '100')
    }

    return `${upstream.pathname}${upstream.search}`
}
