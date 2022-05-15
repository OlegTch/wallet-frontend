import { createSlice } from '@reduxjs/toolkit';

import getOperations from './finance-operation';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const financeSlice = createSlice({
    name: 'finance',
    initialState,
    extraReducers: {
        [getOperations.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [getOperations.fulfilled]: (state, { payload }) => {
            state.data = [...payload];
            state.isLoading = false;
        },
        [getOperations.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        },
    },
});

export default financeSlice;
