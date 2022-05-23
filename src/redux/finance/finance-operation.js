import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    deleteTransactionAPI,
    getOperationsAPI,
    addTransactionAPI,
} from '@api';

const getOperations = createAsyncThunk('getOperations', async data => {
    const result = await getOperationsAPI(data);
    return result;
});

const addOperation = createAsyncThunk('addOperation', async data => {
    const result = await addTransactionAPI(data);
    return result;
});

const deleteOperation = createAsyncThunk('deleteOperation', async id => {
    const result = await deleteTransactionAPI(id);
    return result;
});

export const getFinanceOpertaion = {
    deleteOperation,
    getOperations,
    addOperation,
};
