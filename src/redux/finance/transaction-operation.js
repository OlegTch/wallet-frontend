import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTransactionAPI } from '@api';

const addTransaction = createAsyncThunk('getTransaction', async () => {
    const result = await addTransactionAPI();
    return result;
});

export const transactionOperation = { addTransaction };
