// export const getStatistic = state => {
//     const result = state.statistic.data.length === 0
//             ? []
//         : state.statistic.data.map(el => {
//             return {
//                 balance: el.balance,
//                 sum: el.sum,
//                 income: el.income,
//                 id: el._id,
//                 category: el.category.name,
//                 }
//             })
//     return result
// };

export const getStatistic = state => {
    const result = {};

    result.expense =
        state.statistic.dataExpense.length === 0
            ? []
            : state.statistic.dataExpense.map(el => ({
                  sum: el.totalSum,
                  category: el._id[0].name,
              }));

    result.income =
        state.statistic.dataIncome.length === 0
            ? []
            : state.statistic.dataIncome.map(el => ({
                  sum: el.totalSum,
                  category: el._id[0].name,
              }));
    result.totalExpense = state.statistic.totalExpense;
    result.totalIncome = state.statistic.totalIncome;
    return result;
};

export const isLoadingStatistic = state => state.statistic.isLoading;

export const isErrorStatistic = state => state.statistic.error;
