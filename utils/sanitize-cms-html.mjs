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
