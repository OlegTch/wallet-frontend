import { createSlice } from '@reduxjs/toolkit';

import { statisticOperation } from './statistic-operation';
import { clear } from '../global/global-action';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const statisticSlice = createSlice({
    name: 'statistic',
    initialState,
    extraReducers: {
        [statisticOperation.getStatistic.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [statisticOperation.getStatistic.fulfilled]: (state, { payload }) => {
            state.data = [...payload];
            state.isLoading = false;
        },
        [statisticOperation.getStatistic.rejected]: (state, { error }) => {
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

export default statisticSlice;
