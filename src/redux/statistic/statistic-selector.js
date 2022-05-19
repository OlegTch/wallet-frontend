export const getStatistic = state => {
    console.log('--------redux-------------');
    console.log(state.statistic.data);
    console.log(state.categories.data);
    const result =
        state.statistic.data.length === 0
            ? []
            : state.statistic.data.map(el => {
                  return {
                      category: el.category.name,
                      sum: el.sum,
                  };
              });
    return result;
};

export const isLoadingStatistic = state => state.statistic.isLoading;

export const isErrorStatistic = state => state.statistic.error;
