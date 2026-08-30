import sanitizeHtml from 'sanitize-html'

const CMS_HTML_OPTIONS = Object.freeze({
    allowedTags: [
        'p', 'br', 'strong', 'b', 'em', 'i', 'u', 's',
        'ul', 'ol', 'li', 'blockquote', 'span',
        'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'img',
    ],
    allowedAttributes: {
        a: ['href', 'title', 'target', 'rel'],
        img: ['src', 'alt', 'title', 'width', 'height'],
        '*': ['class'],
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    allowedSchemesAppliedToAttributes: ['href', 'src'],
    allowProtocolRelative: false,
    enforceHtmlBoundary: true,
    nonTextTags: ['style', 'script', 'textarea', 'option', 'noscript', 'iframe', 'object'],
})

export function sanitizeCmsHtml(value) {
    if (typeof value !== 'string') {
        return ''
    }

    return sanitizeHtml(value, CMS_HTML_OPTIONS)
}

export function cmsHtmlToText(value) {
    if (typeof value !== 'string') {
        return ''
    }

    const withBlockSpacing = value.replace(
        /<(?:br\s*\/?|\/(?:p|div|li|h[1-6]))\s*>/gi,
        ' ',
    )

    return sanitizeHtml(withBlockSpacing, {
        allowedTags: [],
        allowedAttributes: {},
        nonTextTags: CMS_HTML_OPTIONS.nonTextTags,
    })
        .replace(/\u00a0/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
}

export function cmsHtmlToPhone(value) {
    const plainText = cmsHtmlToText(value)
    const match = plainText.match(/\+?\d[\d\s().-]{5,}\d/)

    if (!match) {
        return ''
    }

    const digits = match[0].replace(/\D/g, '')
    return match[0].trim().startsWith('+') ? `+${digits}` : digits
}
