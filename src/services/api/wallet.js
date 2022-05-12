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
};

export const getTransactionAPI = () => {
    return tempData.transaction;
};

export const getCategoryAPI = () => {
    return tempData.categories;
};
