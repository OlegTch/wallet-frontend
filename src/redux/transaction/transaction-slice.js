import { createSlice } from '@reduxjs/toolkit';

import { transactionOperation } from './transaction-operation';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    extraReducers: {
        [transactionOperation.getTransaction.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [transactionOperation.getTransaction.fulfilled]: (
            state,
            { payload },
        ) => {
            state.data = [...payload];
            state.isLoading = false;
        },
        [transactionOperation.getTransaction.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        },
    },
});

export default transactionSlice;
