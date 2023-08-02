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

// export mockArrItems = Array.from({ length: 5 }, (_, i) => `image-${i + 1}.png`);// использовал бы этот код если были бы все изображения
export const mockArrItems = Array.from({ length: 26 }, (_, i) => `image${(i % 5) + 1}`);

export function splitArrayToRows (array, row = 3) {
    const firstPartLength = Math.floor(array.length / row) - 1;
    const secondPartLength = firstPartLength + 1;
    const thirdPartLength = firstPartLength;
    const firstPart = array.slice(0, firstPartLength);
    const secondPart = array.slice(firstPartLength, firstPartLength + secondPartLength);
    const thirdPart = array.slice(firstPartLength + secondPartLength, firstPartLength + secondPartLength + thirdPartLength);
    return [firstPart, secondPart, thirdPart];
}
