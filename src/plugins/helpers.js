import hash from 'string-hash';
import randomSeed from 'random-seed';

export const getQueryParams = (data = {}) => {
    const urlSearchParams = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach(el => {
                urlSearchParams.append(key, el);
            });
        } else {
            if (value) urlSearchParams.append(key, value);
        }
    });

    return urlSearchParams.toString();
};
