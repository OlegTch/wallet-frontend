export const getStatistic = state => {
    const result = state.statistic.data.map(el => {
        return {
            category: state.categories.data.find(
                element => element._id === el.category,
            ).name,
            sum: el.sum,
        };
    });
    return result;
};

export const isLoadingStatistic = state => state.statistic.isLoading;
