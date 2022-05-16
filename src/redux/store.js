import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import categorySlice from './categories/categories-slice';
import statisticSlice from './statistic/statistic-slice';
import userSlice from './user/user-slice';
import financeSlice from './finance/finance-slice';

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['token'],
};

const userReducer = persistReducer(persistConfig, userSlice.reducer);

const middleware = getDefaultMiddleware => [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];

const store = configureStore({
    reducer: {
        [userSlice.name]: userReducer,
        [categorySlice.name]: categorySlice.reducer,
        [statisticSlice.name]: statisticSlice.reducer,
        [financeSlice.name]: financeSlice.reducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistedStore = persistStore(store);

export const rootStore = { store, persistedStore };
