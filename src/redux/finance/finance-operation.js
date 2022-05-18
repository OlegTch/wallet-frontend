import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOperationsAPI, addTransactionAPI } from '@api';

const getOperations = createAsyncThunk('getOperations', async data => {
    console.log('++++++++++++++', data);
    const result = await getOperationsAPI(data);

    return result;
});

const addOperation = createAsyncThunk('addOperation', async data => {
    const result = await addTransactionAPI(data);
    return result;
});

export const getFinanceOpertaion = { getOperations, addOperation };
