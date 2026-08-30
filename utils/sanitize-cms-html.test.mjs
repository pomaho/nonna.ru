import assert from 'node:assert/strict'
import test from 'node:test'

import { cmsHtmlToPhone, cmsHtmlToText, sanitizeCmsHtml } from './sanitize-cms-html.mjs'

test('preserves the shared CMS formatting allowlist', () => {
    const html = '<p>Text <strong>bold</strong><br><a href="https://example.com/path">link</a></p>'

    assert.equal(
        sanitizeCmsHtml(html),
        '<p>Text <strong>bold</strong><br /><a href="https://example.com/path">link</a></p>',
    )
})

test('removes scripts, iframes and event handlers', () => {
    const sanitized = sanitizeCmsHtml(
        '<p onclick="steal()">Safe<script>alert(1)</script><iframe src="https://evil.test"></iframe></p>',
    )

    assert.equal(sanitized, '<p>Safe</p>')
    assert.doesNotMatch(sanitized, /onclick|script|iframe|alert\(1\)/i)
})

test('removes javascript and data URLs while retaining safe relative and HTTPS URLs', () => {
    const sanitized = sanitizeCmsHtml([
        '<a href="javascript:alert(1)">bad link</a>',
        '<img src="data:image/svg+xml,<svg></svg>" onerror="steal()">',
        '<a href="/contacts">relative</a>',
        '<img src="https://example.com/image.jpg" alt="safe">',
    ].join(''))

    assert.doesNotMatch(sanitized, /javascript:|data:|onerror/i)
    assert.match(sanitized, /href="\/contacts"/)
    assert.match(sanitized, /src="https:\/\/example\.com\/image\.jpg"/)
})

test('returns an empty string for absent or non-string CMS values', () => {
    assert.equal(sanitizeCmsHtml(), '')
    assert.equal(sanitizeCmsHtml(null), '')
    assert.equal(sanitizeCmsHtml({}), '')
})

test('converts CMS rich text into a single plain-text metadata value', () => {
    assert.equal(
        cmsHtmlToText('<p>Частная квартира в&nbsp;<br>ЖК «Сердце Столицы»<br>Москва</p>'),
        'Частная квартира в ЖК «Сердце Столицы» Москва',
    )
    assert.equal(cmsHtmlToText(null), '')
})

test('extracts one normalized dial target from rich CMS phone text', () => {
    assert.equal(
        cmsHtmlToPhone('<p>+7 (925) 677-66-88<br>Только по записи</p>'),
        '+79256776688',
    )
    assert.equal(cmsHtmlToPhone('<p>Call us later</p>'), '')
})
