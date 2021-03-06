import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    registerAPI,
    loginAPI,
    logoutAPI,
    getUserAPI,
    updateNameUserAPI,
} from '@api';

const login = createAsyncThunk('login', async data => {
    const result = await loginAPI(data);
    return result;
});

const register = createAsyncThunk('register', async data => {
    const result = await registerAPI(data);
    return result;
});

const logout = createAsyncThunk('logout', async () => {
    const result = await logoutAPI();
    return result;
});

const currentUser = createAsyncThunk('current', async token => {
    const result = await getUserAPI(token);

    return result;
});

const updateUser = createAsyncThunk('update', async user => {
    const result = await updateNameUserAPI(user);
    return result;
});

export const userOperation = {
    login,
    register,
    logout,
    currentUser,
    updateUser,
};
