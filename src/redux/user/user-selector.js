export const isAuth = state => state.user.isAuth;

export const isToken = state => (state.user.token ? true : false);

export const getToken = state => state.user.token;

export const isLoading = state => state.user.isLoading;

export const isErrorUser = state => state.user.error;

export const isModalLogout = state => state.user.isModalLogout;

export const getName = state => state.user.user.name;

export const getUser = state => state.user.user;

export const getBalance = state => state.user.user.balance;
