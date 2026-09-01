export function dedupeContentByName(content) {
    if (!Array.isArray(content)) return []

    const names = new Set()
    return content.filter((item) => {
        const name = typeof item?.name === 'string' ? item.name.trim() : ''
        if (!name) return true
        if (names.has(name)) return false
        names.add(name)
        return true
    })
}
