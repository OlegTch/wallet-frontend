import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryAPI } from '@api';

const getCategories = createAsyncThunk('getCategories', async () => {
    const data = await getCategoryAPI();
    return data;
});

export const categoriesOperation = { getCategories };
