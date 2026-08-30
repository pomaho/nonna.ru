import assert from 'node:assert/strict'
import test from 'node:test'

import {sanitizeMapEmbedUrl} from './sanitize-map-url.mjs'

test('accepts the configured Google Maps embed endpoint', () => {
    assert.equal(
        sanitizeMapEmbedUrl('https://www.google.com/maps/embed?pb=example'),
        'https://www.google.com/maps/embed?pb=example',
    )
})

test('rejects unsafe or unexpected map URLs', () => {
    assert.equal(sanitizeMapEmbedUrl('javascript:alert(1)'), '')
    assert.equal(sanitizeMapEmbedUrl('data:text/html,<script>alert(1)</script>'), '')
    assert.equal(sanitizeMapEmbedUrl('https://www.google.com.evil.test/maps/embed'), '')
    assert.equal(sanitizeMapEmbedUrl('https://user:pass@www.google.com/maps/embed'), '')
    assert.equal(sanitizeMapEmbedUrl('https://www.google.com/search?q=nonna'), '')
})
