import { createSlice } from '@reduxjs/toolkit';

import { getFinanceOpertaion } from './finance-operation';

const initialState = {
    data: [],
    userBalance: 0,
    isLoading: false,
    error: null,
    isModalAddTransaction: false,
    isSaveModalDateStatic: false,
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
    },
    extraReducers: {
        [getFinanceOpertaion.getOperations.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [getFinanceOpertaion.getOperations.fulfilled]: (state, { payload }) => {
            state.data = [...payload.transactions];
            state.userBalance = payload.user_balance;
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
            state.data = [...payload];
            state.isLoading = false;
        },
        [getFinanceOpertaion.addOperation.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        },
    },
});

export const { openModalTransaction, closeModalTransaction } =
    financeSlice.actions;
export default financeSlice;
