import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactionAPI } from '@api';

const getTransaction = createAsyncThunk('getTransaction', async () => {
    const data = await getTransactionAPI();
    return data;
});

export const transactionOperation = { getTransaction };
