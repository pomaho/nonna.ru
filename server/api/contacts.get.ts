import {fetchCmsCollection} from '../utils/cms';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    return fetchCmsCollection(event, '/contacts', {
        locale: typeof query.locale === 'string' ? query.locale : 'ru',
        populate: typeof query.populate === 'string' ? query.populate : '*',
    });
});
