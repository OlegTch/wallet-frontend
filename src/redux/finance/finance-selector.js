export const getOperations = state => {
    return state.finance.data;
};

export const getBalance = state => state.finance.userBalance;

export const isLoading = state => state.finance.isLoading;

export const isModalTransaction = state => state.finance.isModalAddTransaction;

export const isDeleteTransaction = state =>
    state.finance.isModalDeleteTransaction;

export const isSaveModalDateStatic = state =>
    state.finance.isSaveModalDateStatic;

export const isTransactionDeleting = state => state.finance.isDeleteTransaction;

export const getDeleteId = state => state.finance.deleteId;

export const isErrorFinance = state => state.finance.error;

export const getParamPage = state => ({
    total: state.finance.total,
    currentPage: state.finance.currentPage,
    totalPage: state.finance.totalPage,
    limit: state.finance.limit,
});
