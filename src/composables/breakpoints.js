export function useBreakpoints () {
    const computedStyle = getComputedStyle(document.body);

    return {
        horizontal: {
            xl: parseInt(computedStyle.getPropertyValue('--bXl')),
            lg: parseInt(computedStyle.getPropertyValue('--bLg')),
            md: parseInt(computedStyle.getPropertyValue('--bMd')),
            sm: parseInt(computedStyle.getPropertyValue('--bSm')),
            xs: parseInt(computedStyle.getPropertyValue('--bXs')),
        },
        vertical: {
            xl: parseInt(computedStyle.getPropertyValue('--bHXl')),
            lg: parseInt(computedStyle.getPropertyValue('--bHLg')),
            md: parseInt(computedStyle.getPropertyValue('--bHMd')),
            sm: parseInt(computedStyle.getPropertyValue('--bHSm')),
            xs: parseInt(computedStyle.getPropertyValue('--bHXs')),
        },
    };
}
