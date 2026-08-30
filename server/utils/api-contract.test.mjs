import assert from 'node:assert/strict'
import test from 'node:test'

import {
    ApiContractError,
    buildCmsApiTarget,
} from './api-contract.mjs'

const baseUrl = 'https://www.nonna.test'

test('allows the exact collection contract and adds the server-owned page-size cap', () => {
    for (const path of [
        '/contacts',
        '/site-news-many',
        '/parquets',
        '/woods',
        '/projects',
        '/type-of-properties',
    ]) {
        const target = new URL(
            buildCmsApiTarget('GET', new URL(`/api${path}?locale=ru&populate=*`, baseUrl)),
            'http://cms.test',
        )

        assert.equal(target.pathname, `/api${path}`)
        assert.equal(target.searchParams.get('locale'), 'ru')
        assert.equal(target.searchParams.get('populate'), '*')
        assert.equal(target.searchParams.get('pagination[pageSize]'), '100')
    }
})

test('allows HEAD and numeric detail routes without collection pagination', () => {
    for (const path of ['/parquets/1', '/projects/42', '/site-news-many/999']) {
        const target = new URL(
            buildCmsApiTarget('HEAD', new URL(`/api${path}?populate=*`, baseUrl)),
            'http://cms.test',
        )

        assert.equal(target.pathname, `/api${path}`)
        assert.equal(target.searchParams.get('populate'), '*')
        assert.equal(target.searchParams.has('pagination[pageSize]'), false)
    }
})

test('rejects methods and paths outside the exact allowlist', () => {
    for (const [method, path, statusCode] of [
        ['POST', '/api/parquets', 405],
        ['GET', '/api/users', 404],
        ['GET', '/api/woods/1', 404],
        ['GET', '/api/projects/not-a-number', 404],
        ['GET', '/api/projects/1.5', 404],
        ['GET', '/api/projects/1/', 404],
        ['GET', '/api/parquets%2f1', 400],
        ['GET', '/api/projects/%2e%2e/admin', 400],
    ]) {
        assert.throws(
            () => buildCmsApiTarget(method, path),
            (error) => error instanceof ApiContractError && error.statusCode === statusCode,
            `${method} ${path}`,
        )
    }
})

test('rejects unknown, nested, duplicate and pagination query parameters', () => {
    for (const query of [
        'filters[name][$eq]=secret',
        'populate[author]=*',
        'pagination[pageSize]=1',
        'pagination[start]=0',
        'sort=name',
        'locale=ru&locale=en',
        'populate=*&populate=*',
        'unknown=value',
    ]) {
        assert.throws(
            () => buildCmsApiTarget('GET', new URL(`/api/projects?${query}`, baseUrl)),
            (error) => error instanceof ApiContractError && error.statusCode === 400,
            query,
        )
    }
})

test('accepts only supported locale values and literal populate=*', () => {
    for (const query of ['locale=de', 'locale=', 'populate=deep', 'populate=', 'populate=%2A%2A']) {
        assert.throws(
            () => buildCmsApiTarget('GET', new URL(`/api/contacts?${query}`, baseUrl)),
            (error) => error instanceof ApiContractError && error.statusCode === 400,
            query,
        )
    }

    assert.doesNotThrow(() => buildCmsApiTarget('GET', new URL('/api/contacts?locale=en', baseUrl)))
    assert.doesNotThrow(() => buildCmsApiTarget('GET', new URL('/api/contacts?populate=*', baseUrl)))
    assert.doesNotThrow(() => buildCmsApiTarget('GET', new URL('/api/contacts', baseUrl)))
})
