import { BaseCRUD } from '@/services/base-request';
import { toastError, ToastMessages, toastSuccess } from '@/composables/toast';

const serviceName = 'posts';

export class PostsService {
    /**
     * @param {number} offset
     * @param {number} limit
     * @param {string} search
     * @returns {Promise<Response>}
     */
    static async getPostsList (
        offset,
        limit,
        search = null) {
        const resp = await BaseCRUD.GET({
            service: serviceName,
            query: {
                offset,
                limit,
                search,
            },
        });

        if (!resp.status.ok) {
            toastError(ToastMessages.serverError);
            return null;
        }
        return resp.payload;
    };

    /**
     * @param {string} id required
     * @returns {Promise<Response>}
     */
    static async getPostById (id) {
        const resp = await BaseCRUD.GET({
            service: serviceName,
            id,
        });

        if (!resp.status.ok) {
            toastError(ToastMessages.serverError);
            return null;
        }
        return resp.payload;
    }

    /**
     * @param {string} id required
     * @param {object} body required
     * @returns {Promise<Response>}
     */
    static async changePostInfo (id, body) {
        const resp = await BaseCRUD.PUT({
            service: serviceName,
            id,
            body,
        });

        if (!resp.status.ok) {
            toastError(ToastMessages.serverError);
            return null;
        }
        toastSuccess(ToastMessages.postChanging);
        return resp.status.ok;
    };

    static async deletePost (id) {
        const resp = await BaseCRUD.DELETE({
            service: serviceName,
            id,
        });

        if (!resp.status.ok) {
            toastError(ToastMessages.serverError);
            return null;
        }
        toastSuccess(ToastMessages.postDeleted);
        return resp.status.ok;
    };
}
