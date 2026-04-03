export const fetchCmsCollection = async <T>(
    event: Parameters<typeof getQuery>[0],
    path: string,
    query: Record<string, string> = {},
) => {
    const config = useRuntimeConfig(event);
    const url = `${config.apiBase}${path}`;

    const response = await $fetch<{ data: T }>(url, {
        headers: config.apiBearerToken
            ? {
                authorization: `Bearer ${config.apiBearerToken}`,
            }
            : undefined,
        query,
    });

    return response.data;
};
