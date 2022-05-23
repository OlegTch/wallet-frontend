import axios from 'axios';
import { HttpError } from '../error';
// axios.defaults.baseURL = 'http://localhost:3001/api';
axios.defaults.baseURL = 'https://wallet-serv.herokuapp.com/api';

const setAxiosToken = token => {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        axios.defaults.headers.common.Authorization = '';
    }
};

const getError = error => {
    console.dir(error);
    if (error.response.status !== 0) {
        throw new HttpError(error.response.data.message, error.response.status);
    } else if (error.request.status !== 0) {
        throw new HttpError(error.request.statusText, error.request.status);
    } else {
        throw new HttpError(error.message, 500);
    }
};

//  ----------------   USER   -----------------------

export const registerAPI = async user => {
    try {
        const result = await axios.post('auth/register', {
            userName: user.name,
            email: user.email,
            password: user.password,
        });
        setAxiosToken(result.data.data.token);
        return result.data.data;
    } catch (error) {
        getError(error);
    }
};

export const loginAPI = async user => {
    try {
        const result = await axios.post('auth/login', user);
        setAxiosToken(result.data.data.token);
        return result.data.data;
    } catch (error) {
        getError(error);
    }
};

export const logoutAPI = async () => {
    try {
        await axios.get('auth/logout');
        setAxiosToken();
        return { status: 'ok', code: 204 };
    } catch (error) {
        getError(error);
    }
};

export const getUserAPI = async token => {
    try {
        setAxiosToken(token);
        const result = await axios.get('users/current');
        return result.data.data.user;
    } catch (error) {
        getError(error);
    }
};

export const updateNameUserAPI = async user => {
    try {
        const result = await axios.patch('users', user);
        return result.data.data.user;
    } catch (error) {
        getError(error);
    }
};

// -------------  Category  --------------------------

export const getCategoryAPI = async () => {
    try {
        const resultD = await axios.get('categories/income');
        const resultC = await axios.get('categories/expense');
        return [...resultC.data.categories, ...resultD.data.categories];
    } catch (error) {
        getError(error);
    }
};

// ------------ Statistic ----------------------------

export const getStatisticAPI = async ({ month, year }) => {
    try {
        const query = `?${`month=${month}`}&${year ? `year=${year}` : null}`;

        const result = await axios.get(`transactions/statistics${query}`);

        return result.data.transactions;
    } catch (error) {
        getError(error);
    }
    //  try {
    //      const query = `${month || year ? '?' : null}${
    //          month ? `month=${month}` : null
    //      }${month && year ? '&' : null}${year ? `year=${year}` : null}`;

    //      const result = await axios.get(`transactions/statistics${query}`);

    //      return result.data.transactions;
    //  } catch (error) {
    //      getError(error);
    //  }
};

// ------------  Finance (operations) ----------------------------

export const getOperationsAPI = async data => {
    try {
        let query = '';
        if (data) {
            query = `transactions?page=${data.page}&limit=${data.limit}`;
        } else {
            query = `transactions`;
        }
        const result = await axios.get(query);
        return result.data.data;
    } catch (error) {
        getError(error);
    }
};

export const addTransactionAPI = async data => {
    try {
        const result = await axios.post('transactions', data);
        return result.data.data.transaction;
    } catch (error) {
        getError(error);
    }
};

export const deleteTransactionAPI = async id => {
    try {
        const result = await axios.delete(`transactions/${id}`);
        return result;
    } catch (error) {
        getError(error);
    }
};
