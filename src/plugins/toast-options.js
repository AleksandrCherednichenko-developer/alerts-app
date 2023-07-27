export const options = {
    position: 'bottom-right',
    closeOnClick: true,
    timeout: 3000,
    pauseOnFocusLoss: false,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 1,
    showCloseButtonOnHover: true,
    hideProgressBar: false,
    closeButton: 'button',
    icon: false,
    rtl: false,
    filterToasts: toasts => {
        const types = {};
        return toasts.reduce((aggToasts, toast) => {
            if (!types[toast.type]) {
                aggToasts.push(toast);
                types[toast.type] = true;
            }
            return aggToasts;
        }, []);
    },
};
