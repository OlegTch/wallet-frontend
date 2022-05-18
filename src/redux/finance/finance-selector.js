export const getOperations = state => {
    return state.finance.data;
};

export const getBalance = state => state.finance.userBalance;

export const isLoading = state => state.finance.isLoading;

export const isModalTransaction = state => state.finance.isModalAddTransaction;

export const isSaveModalDateStatic = state =>
    state.finance.isSaveModalDateStatic;
