import { useToast } from 'vue-toastification';
import { successToastTimeout, errorToastTimeout } from '@/constants/default-variables';

const toast = useToast();

export const toastSuccess = text => {
    return toast.success(text, { timeout: successToastTimeout });
};

export const toastError = text => {
    return toast.error(text, { timeout: errorToastTimeout });
};

export const ToastMessages = {
    serverError: 'Server error',
    postDeleted: 'Post deleted',
    postChanging: 'Post edited successfully',
};
