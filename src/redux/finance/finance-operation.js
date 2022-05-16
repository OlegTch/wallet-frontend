import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOperationsAPI, addTransactionAPI } from '@api';

const getOperations = createAsyncThunk('getOperations', async data => {
    const result = await getOperationsAPI(data);

    return result;
});

const addOperation = createAsyncThunk('addOperation', async () => {
    const result = await addTransactionAPI();
    return result;
});

export const getFinanceOpertaion = { getOperations, addOperation };
