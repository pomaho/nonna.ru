const ALLOWED_MAP_HOSTS = new Set(['www.google.com'])

export function sanitizeMapEmbedUrl(value) {
    if (typeof value !== 'string' || !value) {
        return ''
    }

    try {
        const url = new URL(value)

        if (
            url.protocol !== 'https:'
            || !ALLOWED_MAP_HOSTS.has(url.hostname)
            || url.username
            || url.password
            || url.pathname !== '/maps/embed'
        ) {
            return ''
        }

        return url.toString()
    } catch {
        return ''
    }
}
