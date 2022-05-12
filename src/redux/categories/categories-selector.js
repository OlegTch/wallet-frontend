export const isLoading = state => state.categories.isLoading;

export const isCategoriesFull = state =>
    state.categories.data.length > 0 ? true : false;

export const getCategoryDebet = state =>
    state.categories.data.filter(el => el.income);

export const getCategoryCredit = state =>
    state.categories.data.filter(el => !el.income);
