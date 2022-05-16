export const getStatistic = state => {
    const result = state.statistic.data.map(el => {
        return {
            category: state.categories.data.find(
                element => element.id === el.category,
            ).name,
            sum: el.sum,
        };
    });
    return result;
};

export const updateStatistic = state => {
    return state.statistic.data; //*
};