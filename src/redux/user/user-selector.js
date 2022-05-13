export const isAuth = state => state.user.isAuth;

export const getName = state => state.user.user.name;

export const getUser = state => state.user.user;

export const isToken = state => (state.user.token ? true : false);

export const getBalance = state => state.user.user.balance;

export const isLoading = state => state.user.isLoading;

export const error = state => state.user.error;
