import { BaseCRUD } from '@/services/base-request';
import { toastError, ToastMessages } from '@/composables/toast';

const service = 'users';

export class UserService {
    /**
     * @param {object} body required
     * @param {string} body.username required
     * @param {string} body.password required
     * @returns {Promise<Response>}
     */
    static async createUser (body) {
        const resp = await BaseCRUD.POST({
            service,
            body,
        });

        if (!resp.status.ok) {
            toastError(ToastMessages.serverError);
            return null;
        }
        return resp.payload;
    };
}
