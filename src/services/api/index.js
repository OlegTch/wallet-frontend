import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/api/';

const setAxiosToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

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
    operations: [
        {
            id: 1,
            category: 'Регулярний дохід',
            income: true,
            sum: 10000,
            comment: 'Робота',
            balance: 10000,
            date: Date.now(),
            month: 5,
            year: 2022,
        },
        {
            id: 2,
            category: 'Різне',
            income: false,
            sum: 1000,
            comment: 'Подарок дружині',
            balance: 9000,
            date: Date.now(),
            month: 5,
            year: 2022,
        },
        {
            id: 3,
            category: 'Не регулярний дохід',
            income: true,
            sum: 2000,
            comment: 'Подарок',
            balance: 11000,
            date: Date.now(),
            month: 5,
            year: 2022,
        },
        {
            id: 4,
            category: 'Машина',
            income: false,
            sum: 3000,
            comment: 'Ремонт',
            balance: 8000,
            date: Date.now(),
            month: 5,
            year: 2022,
        },
        {
            id: 5,
            category: 'Продукти',
            income: false,
            sum: 500,
            comment: 'На тиждень',
            balance: 7500,
            date: Date.now(),
            month: 5,
            year: 2022,
        },
    ],
};

const dataExampl = {
    categories: [
        { id: 1, name: 'Основні витрати', income: true },
        { id: 2, name: 'Продукти', income: true },
        { id: 3, name: 'Машина', income: true },
        { id: 4, name: 'Турбота про себе', income: true },
        { id: 5, name: 'Турбота за дітей', income: true },
        { id: 6, name: 'Товари для дому', income: true },
        { id: 7, name: 'Освіта', income: true },
        { id: 8, name: 'Дозвілля', income: true },
        { id: 9, name: 'Інші витрати', income: true },
        { id: 10, name: 'Дохід', income: false },
        { id: 11, name: 'Інший дохід', income: false },
    ],
    statistic: [
        { category: 1, sum: 8700 },
        { category: 2, sum: 3800.74 },
        { category: 3, sum: 1500 },
        { category: 4, sum: 800 },
        { category: 5, sum: 2208.05 },
        { category: 6, sum: 300 },
        { category: 7, sum: 3400 },
        { category: 8, sum: 1230 },
        { category: 9, sum: 610 },
    ],
};

//  ----------------   USER   -----------------------

export const registerAPI = async user => {
    // const result = await axios.post('auth/register', {
    //     userName: user.name,
    //     email: user.email,
    //     password: user.password,
    // });
    // if (result.data.code === 201) {
    //     setAxiosToken(result.data.data.token);
    //     return result.data.data;
    // }

    return tempData.user;
};

export const loginAPI = async user => {
    // const result = await axios.post('auth/login', user);
    // if (result.data.code === 200) {
    //     console.log(result.data.data.token);
    //     setAxiosToken(result.data.data.token);
    //     console.dir(axios);
    //     return result.data.data;
    // }
    if (
        user.email === tempData.user.email &&
        user.password === tempData.user.password
    ) {
        return tempData.user;
    }
    throw new Error('Wrong email or password');
};

export const logoutAPI = async () => {
    // await axios.get('auth/logout');
    return { status: 'ok', code: 204 };
};

export const getUserAPI = async token => {
    // setAxiosToken(token);
    // const result = await axios.get('users/current');
    // if (result.data.code === 200) {
    //     return result.data.data.user;
    // }
    return tempData.user;
};

// -------------  Category  --------------------------

export const getCategoryAPI = async () => {
    // const resultD = await axios.get('categories/income');
    // const resultC = await axios.get('categories/expense');
    // return [...resultC.data.categories, ...resultD.data.categories];

    // return tempData.categories;
    return dataExampl.categories;
};

// ------------ Statistic ----------------------------

export const getStatisticAPI = async ({ month, year }) => {
    // const query = `${month || year ? '?' : null}${
    //     month ? `month=${month}` : null
    // }${month && year ? '&' : null}${year ? `year=${year}` : null}`;

    // const result = await axios.get(`transactions/statistics${query}`);
    // console.log('-------------- statistic -----------------');
    // console.log(result);
    // return result.data.data.transaction;
    // return tempData.statistic;
    return dataExampl.statistic;
};

// ------------  Finance (operations) ----------------------------

export const getOperationsAPI = async () => {
    // const result = await axios.get('transactions');
    // console.log('--------------- transaction --------------');
    // console.log(result);
    // return result.data.data;
    return { transactions: tempData.operations, user_balance: 3500 };
};

export const addTransactionAPI = async data => {
    // const result = await axios.post('transactions', data);
    // return result.data.transaction;
    return;
};
