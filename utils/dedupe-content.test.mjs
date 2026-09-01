import assert from 'node:assert/strict'
import test from 'node:test'

import { dedupeContentByName } from './dedupe-content.mjs'

test('keeps one card per localized name in the all-items view', () => {
    const original = [
        { id: 1, name: 'Дуб термо рубанок', wood: { name: 'Дуб термо' } },
        { id: 2, name: 'Дуб термо рубанок', wood: { name: 'Ручная обработка' } },
        { id: 3, name: 'Дуб Айсберг', wood: { name: 'Дуб' } },
    ]

    assert.deepEqual(dedupeContentByName(original), [original[0], original[2]])
})

test('does not merge blank names or mutate the source array', () => {
    const original = [{ id: 1, name: '' }, { id: 2, name: null }]

    assert.deepEqual(dedupeContentByName(original), original)
    assert.equal(original.length, 2)
})
