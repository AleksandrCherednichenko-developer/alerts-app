import req from './simple-request';
import { getQueryParams } from '@/plugins/helpers';

export class BaseCRUD {
    static async GET ({ service, id = null, query = {}}) {
        const uri = id
            ? `${id}?${getQueryParams(query)}`
            : `?${getQueryParams(query)}`;

        return req({
            service,
            method: 'GET',
            uri,
        });
    }

    static async POST ({ service, body = null }) {
        return req({
            service,
            method: 'POST',
            body,
        });
    }

    static async DELETE ({ service, id, body = null }) {
        return req({
            service,
            method: 'DELETE',
            uri: id,
            body,
        });
    }

    static async PATCH ({ service, id, body }) {
        return req({
            service,
            method: 'PATCH',
            uri: id,
            body,
        });
    }

    static async PUT ({ service, id = null, body = null }) {
        return req({
            service,
            method: 'PUT',
            uri: id,
            ...(body && { body }),
        });
    }
}
