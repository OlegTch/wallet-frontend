export const isLoading = state => state.categories.isLoading;

export const isCategoriesFull = state =>
    state.categories.data.length > 0 ? true : false;
