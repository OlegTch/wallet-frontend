import { createSlice } from '@reduxjs/toolkit';

import { statisticOperation } from './statistic-operation';
import { clear } from '../global/global-action';

const initialState = {
    dataExpense: [],
    dataIncome: [],
    totalExpense: 0,
    totalIncome: 0,
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
            state.totalExpense = payload.allExpense;
            state.totalIncome = payload.allIncome;
            state.dataExpense = payload.transactionsExpense;
            state.dataIncome = payload.transactionsIncome;
            state.isLoading = false;
        },
        [statisticOperation.getStatistic.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        },
        [clear]: state => {
            state.dataExpense = [];
            state.dataIncome = [];
            state.totalExpense = 0;
            state.totalIncome = 0;
            state.isLoading = false;
            state.error = null;
        },
    },
});

export default statisticSlice;
