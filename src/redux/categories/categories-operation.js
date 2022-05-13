import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryAPI } from '@api';

const getCategories = createAsyncThunk('getCategories', async () => {
    const result = await getCategoryAPI();
    return result;
});

export const categoriesOperation = { getCategories };
