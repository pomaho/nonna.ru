import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import test from 'node:test'

const pageUrl = new URL('../pages/project/[id].vue', import.meta.url)

test('English locale defines every project detail label', async () => {
    const [page, localeSource] = await Promise.all([
        fs.readFile(pageUrl, 'utf8'),
        fs.readFile(new URL('../locales/en.json', import.meta.url), 'utf8'),
    ])
    const locale = JSON.parse(localeSource)
    const keys = [...page.matchAll(/\$t\('(?<key>project-[^']+)'\)/g)]
        .map((match) => match.groups.key)

    assert.ok(keys.length > 0, 'project page must reference localized labels')
    for (const key of new Set(keys)) {
        assert.equal(typeof locale[key], 'string', `missing English translation for ${key}`)
        assert.notEqual(locale[key].trim(), '', `empty English translation for ${key}`)
        assert.notEqual(locale[key], key, `English translation leaks the key ${key}`)
    }
})

test('optional author contacts are not rendered as broken links', async () => {
    const page = await fs.readFile(pageUrl, 'utf8')

    assert.ok(
        /<section\s+v-if="project\.author \|\| project\.author_instagram"/.test(page),
        'project author section must be conditional'
    )
    assert.ok(
        /<a\s+v-if="project\.author_instagram"\s+class="instagram-link"/.test(page),
        'Instagram link must be conditional'
    )
})
