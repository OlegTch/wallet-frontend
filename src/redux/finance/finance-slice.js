import { createSlice } from '@reduxjs/toolkit';

import { getFinanceOpertaion } from './finance-operation';
import { clear } from '../global/global-action';

const initialState = {
    data: [],
    userBalance: 0,
    isLoading: false,
    error: null,
    deleteId: null,
    isModalDeleteTransaction: false,
    isDeleteTransaction: false,
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
        openModalDeleteTransaction: (state, { payload }) => {
            state.isModalDeleteTransaction = true;
            state.isDeleteTransaction = false;
            state.deleteId = payload;
        },
        closeModalDeleteTransaction: state => {
            state.isModalDeleteTransaction = false;
        },
        setDeleteTransaction: state => {
            state.isDeleteTransaction = true;
        },
        clearDeleteTransaction: state => {
            state.isDeleteTransaction = false;
            state.deleteId = null;
        },
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
        clearError: state => {
            state.error = null;
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
            state.isSaveModalDateStatic = false;
        },
        [getFinanceOpertaion.addOperation.fulfilled]: (state, { payload }) => {
            console.log('------------slice add operation--------------------');
            console.log(payload);
            state.data = [payload, ...state.data];
            state.isLoading = false;
            state.isSaveModalDateStatic = true;
        },
        [getFinanceOpertaion.addOperation.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        },

        [getFinanceOpertaion.deleteOperation.pending]: state => {
            state.isLoading = true;
            state.error = null;
            state.isDeleteTransaction = false;
        },
        [getFinanceOpertaion.deleteOperation.fulfilled]: state => {
            state.isLoading = false;
            state.isDeleteTransaction = true;
            state.isModalDeleteTransaction = false;
        },
        [getFinanceOpertaion.deleteOperation.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
            state.isDeleteTransaction = false;
            state.isModalDeleteTransaction = false;
        },
        [clear]: state => {
            state.data = [];
            state.userBalance = 0;
            state.currentPage = 1;
            state.total = 0;
            state.totalPage = 1;
            state.limit = 5;
            state.isModalAddTransaction = false;
            state.isSaveModalDateStatic = false;
            state.isLoading = false;
            state.error = null;
        },
    },
});

export const {
    openModalTransaction,
    closeModalTransaction,
    setSaveModalDateStatic,
    clearSaveModalDateStatic,
    setLimit,
    clearError,
    openModalDeleteTransaction,
    closeModalDeleteTransaction,
    setDeleteTransaction,
    clearDeleteTransaction,
} = financeSlice.actions;
export default financeSlice;
