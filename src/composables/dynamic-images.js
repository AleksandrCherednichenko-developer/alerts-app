export default function dynamicImages (asset) {
    const assets = import.meta.glob('/public/*/*', { eager: true });

    const getAssetUrl = () => {
        if (assets[asset]) {
            return assets[asset].default;
        }
    };

    return getAssetUrl();
}
