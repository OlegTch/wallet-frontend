import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOperationsAPI } from '@api';

const getOperations = createAsyncThunk('getOperations', async data => {
    const result = await getOperationsAPI(data);

    return result;
});

export default getOperations;
