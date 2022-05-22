import { createSlice } from '@reduxjs/toolkit';

import { userOperation } from './user-operation';
import { clear } from '../global/global-action';

const initialState = {
    user: {},
    token: null,
    isAuth: false,
    isModalLogout: false,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        openModalLogout: state => {
            state.isModalLogout = true;
        },
        closeModalLogout: state => {
            state.isModalLogout = false;
        },
        clearError: state => {
            state.error = null;
        },
    },
    extraReducers: {
        [userOperation.register.pending]: state => {
            state.isLoading = true;
            state.error = null;
            state.isAuth = false;
        },
        [userOperation.register.fulfilled]: (state, { payload }) => {
            state.user.name = payload.user.userName;
            state.user.email = payload.user.email;
            state.token = payload.token;
            state.isAuth = true;
            state.isLoading = false;
        },
        [userOperation.register.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        },

        [userOperation.login.pending]: state => {
            state.isLoading = true;
            state.error = null;
            state.isAuth = false;
        },

        [userOperation.login.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.user.name = payload.user.userName;
            state.user.email = payload.user.email;
            state.token = payload.token;
            state.isAuth = true;
            state.isLoading = false;
        },

        [userOperation.login.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        },

        [userOperation.logout.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [userOperation.logout.fulfilled]: (state, { payload }) => {
            state.user = {};
            state.token = null;
            state.isAuth = false;
            state.isLoading = false;
            state.isModalLogout = false;
        },
        [userOperation.logout.rejected]: (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        },
        [userOperation.currentUser.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [userOperation.currentUser.fulfilled]: (state, { payload }) => {
            state.user.name = payload.userName;
            state.user.email = payload.email;
            state.user.balance = payload.balance;
            state.isAuth = true;
            state.isLoading = false;
        },
        [userOperation.currentUser.rejected]: (state, { error }) => {
            // if (error.code === 'ERR_BAD_REQUEST') {
            state.token = null;
            state.isAuth = false;
            // }
            state.isLoading = false;
            state.error = error.message;
        },
        [clear]: state => {
            state.user = {};
            state.token = null;
            state.isAuth = false;
            state.isModalLogout = false;
            state.isLoading = false;
            state.error = null;
        },
    },
});

export const { openModalLogout, closeModalLogout, clearError } =
    userSlice.actions;
export default userSlice;
