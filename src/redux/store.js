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
import transactionSlice from './transaction/transaction-slice';

const persistConfig = {
    key: 'category',
    storage,
};

const rootReducer = persistReducer(persistConfig, categorySlice.reducer);

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
        [categorySlice.name]: rootReducer,
        [transactionSlice.name]: transactionSlice.reducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistedStore = persistStore(store);

export const rootStore = { store, persistedStore };
