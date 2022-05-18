import axios from 'axios';
axios.defaults.baseURL = 'https://wallet-serv.herokuapp.com/api/';

const setAxiosToken = token => {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        axios.defaults.headers.common.Authorization = '';
    }
};

//  ----------------   USER   -----------------------

export const registerAPI = async user => {
    const result = await axios.post('auth/register', {
        userName: user.name,
        email: user.email,
        password: user.password,
    });
    setAxiosToken(result.data.data.token);
    return result.data.data;
};

export const loginAPI = async user => {
    const result = await axios.post('auth/login', user);
    setAxiosToken(result.data.data.token);
    return result.data.data;
};

export const logoutAPI = async () => {
    await axios.get('auth/logout');
    setAxiosToken();
    return { status: 'ok', code: 204 };
};

export const getUserAPI = async token => {
    setAxiosToken(token);
    const result = await axios.get('users/current');
    return result.data.data.user;
};

// -------------  Category  --------------------------

export const getCategoryAPI = async () => {
    const resultD = await axios.get('categories/income');
    const resultC = await axios.get('categories/expense');
    return [...resultC.data.categories, ...resultD.data.categories];
};

// ------------ Statistic ----------------------------

export const getStatisticAPI = async ({ month, year }) => {
    const query = `${month || year ? '?' : null}${
        month ? `month=${month}` : null
    }${month && year ? '&' : null}${year ? `year=${year}` : null}`;

    const result = await axios.get(`transactions/statistics${query}`);
    return result.data.transactions;
};

// ------------  Finance (operations) ----------------------------

export const getOperationsAPI = async () => {
    const result = await axios.get('transactions');
    return result.data.data;
};

export const addTransactionAPI = async data => {
    const result = await axios.post('transactions', data);
    return result.data.data.transaction;
};
