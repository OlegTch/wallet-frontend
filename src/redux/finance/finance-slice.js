import { createSlice } from '@reduxjs/toolkit';

import { getFinanceOpertaion } from './finance-operation';

const initialState = {
    data: [],
    userBalance: 0,
    isLoading: false,
    error: null,
    isModalAddTransaction: false,
    isSaveModalDateStatic: false,
    total: 0,
    currentPage: 1,
    totalPage: 1,
    limit: 5,
};

const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {
        openModalTransaction: state => {
            state.isModalAddTransaction = true;
        },
        closeModalTransaction: state => {
            state.isModalAddTransaction = false;
        },
        setSaveModalDateStatic: state => {
            state.isSaveModalDateStatic = true;
        },
        clearSaveModalDateStatic: state => {
            state.isSaveModalDateStatic = false;
        },
        setLimit: (state, { payload }) => {
            state.limit = payload;
        },
    },
    extraReducers: {
        [getFinanceOpertaion.getOperations.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [getFinanceOpertaion.getOperations.fulfilled]: (state, { payload }) => {
            state.data = [...payload.transactions];
            state.userBalance = payload.user_balance;
            if (payload.page) {
                state.currentPage = payload.page;
            }
            if (payload.totalPage) {
                state.totalPage = payload.totalPage;
            }
            if (payload.total) {
                state.total = payload.total;
            }
            state.isLoading = false;
        },
        [getFinanceOpertaion.getOperations.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        },

        [getFinanceOpertaion.addOperation.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [getFinanceOpertaion.addOperation.fulfilled]: (state, { payload }) => {
            state.data = [payload, ...state.data];
            state.isLoading = false;
            state.isSaveModalDateStatic = true;
        },
        [getFinanceOpertaion.addOperation.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        },
    },
});

export const {
    openModalTransaction,
    closeModalTransaction,
    setSaveModalDateStatic,
    clearSaveModalDateStatic,
    setLimit,
} = financeSlice.actions;
export default financeSlice;
