import { createSlice } from '@reduxjs/toolkit';

import { categoriesOperation } from './categories-operation';
import { clear } from '../global/global-action';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        clearError: state => {
            state.error = null;
        },
    },
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
        [clear]: state => {
            state.data = [];
            state.isLoading = false;
            state.error = null;
        },
    },
});

export const { clearError } = categoriesSlice.actions;
export default categoriesSlice;
