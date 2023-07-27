const API_PREFIX = 'https://jsonplaceholder.typicode.com';
const CONTENT_TYPE = 'Content-Type';
const MIME_TYPE = 'application/json';

async function request ({
    mimeType = MIME_TYPE,
    defaultHeaders = { [CONTENT_TYPE]: MIME_TYPE },
    service,
    method,
    uri = '',
    body,
    queryString = '',
}) {
    const status = {
        code: 418,
        ok: false,
    };
    let payload = null;
    try {
        const resp = await fetch(
            uri ? `${API_PREFIX}/${service}/${uri}${queryString}` : `${API_PREFIX}/${service}`,
            {
                method,
                body: defaultHeaders[CONTENT_TYPE] === 'application/json' ? JSON.stringify(body) : body,
                headers: (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method) && body != null) ? defaultHeaders : {},
            },
        );
        status.code = resp.status;
        status.ok = resp.ok;
        if (resp.headers.get(CONTENT_TYPE).split(';')[0] === mimeType) {
            payload = await resp.json().catch(() => null);
        }
        payload ??= { message: resp.message };
    } catch (error) {
    }
    return {
        status,
        payload,
    };
}

export default request;
