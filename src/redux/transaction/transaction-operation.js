import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactionAPI } from '@api';

const getTransaction = createAsyncThunk('getTransaction', async () => {
    const result = await getTransactionAPI();
    return result;
});

export const transactionOperation = { getTransaction };
