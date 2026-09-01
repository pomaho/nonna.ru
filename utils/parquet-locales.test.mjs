import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import test from 'node:test'

test('English locale defines every label used by the parquet details page', async () => {
    const [page, localeSource] = await Promise.all([
        fs.readFile(new URL('../pages/parquet/[id].vue', import.meta.url), 'utf8'),
        fs.readFile(new URL('../locales/en.json', import.meta.url), 'utf8'),
    ])
    const locale = JSON.parse(localeSource)
    const keys = [...page.matchAll(/\$t\('(?<key>parquet-[^']+)'\)/g)]
        .map((match) => match.groups.key)

    assert.ok(keys.length > 0, 'parquet page must reference localized labels')
    for (const key of new Set(keys)) {
        assert.equal(typeof locale[key], 'string', `missing English translation for ${key}`)
        assert.notEqual(locale[key].trim(), '', `empty English translation for ${key}`)
        assert.notEqual(locale[key], key, `English translation leaks the key ${key}`)
    }
})
