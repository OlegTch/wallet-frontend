import axios from 'axios';
axios.defaults.baseURL = 'https://';

const tempData = {
    categories: [
        {
            id: 1,
            income: true,
            name: 'Основний дохід',
        },
        {
            id: 2,
            income: true,
            name: 'Додатково',
        },
        {
            id: 3,
            income: false,
            name: 'Авто',
        },
        {
            id: 4,
            income: false,
            name: 'Їжа',
        },
    ],
    transaction: [
        {
            id: 1,
            categoryId: 1,
            income: true,
            sum: 2500,
            comment: 'my comment',
            balance: 2500,
            datetime: Date.now(),
            month: 5,
            year: 2022,
        },
    ],
    user: {
        name: 'Guest',
        email: 'test@gmail.com',
        password: 'qwerty',
        balance: 2500,
        token: 'qwetyyuuiioopppkkcjhcggfufufj',
    },
    statistic: [
        { category: 1, sum: 3000 },
        { category: 2, sum: 1000 },
        { category: 3, sum: 500 },
        { category: 4, sum: 1000 },
    ],
};

//  ----------------   USER   -----------------------

export const registerAPI = user => {
    return tempData.user;
};

export const loginAPI = user => {
    if (
        user.email === tempData.user.email &&
        user.password === tempData.user.password
    ) {
        return tempData.user;
    }
    throw new Error('Wrong email or password');
};

export const logoutAPI = () => {
    return { status: 'ok', code: 200 };
};

export const getUserAPI = () => {
    return tempData.user;
};

// -----------  Transaction  -------------------------

export const getTransactionAPI = () => {
    return tempData.transaction;
};

export const addTransactionAPI = data => {
    return data;
};

// -------------  Category  --------------------------

export const getCategoryAPI = () => {
    return tempData.categories;
};

// ------------ Statistic ----------------------------

export const getStatisticAPI = data => {
    return tempData.statistic;
};
