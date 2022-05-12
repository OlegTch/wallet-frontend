import { createSlice } from '@reduxjs/toolkit';

import { categoriesOperation } from './categories-operation';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: {
        [categoriesOperation.getCategories.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [categoriesOperation.getCategories.fulfilled]: (state, { payload }) => {
            state.data = [...payload];
            state.isLoading = false;
        },
        [categoriesOperation.getCategories.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        },
    },
});

export default categoriesSlice;
