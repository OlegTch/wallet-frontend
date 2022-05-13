import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStatisticAPI } from '@api';

const getStatistic = createAsyncThunk('getStatistic', async data => {
    const result = await getStatisticAPI(data);
    return result;
});
export const statisticOperation = { getStatistic };
