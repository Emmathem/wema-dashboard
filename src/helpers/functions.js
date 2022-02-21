export const formatNumber = num => {
    if (!num) {
        return;
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
