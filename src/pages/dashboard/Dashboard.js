import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header, Balans, Navigation } from '@component';
import { transactionOperation } from '@redux/transaction/transaction-operation';
import { categoriesOperation } from '@redux/categories/categories-operation';
import { isCategoriesFull } from '@redux/categories/categories-selector';
import { statisticOperation } from '@redux/statistic/statistic-operation';
import HomeTab from '@component/homeTab';

export const Dashboard = () => {
    const dispatch = useDispatch();
    const isCategories = useSelector(isCategoriesFull);

    useEffect(() => {
        if (!isCategories) {
            dispatch(categoriesOperation.getCategories());
        }
        dispatch(transactionOperation.getTransaction());
        dispatch(statisticOperation.getStatistic());
    }, []);

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <Navigation />
                    <Balans />
                </div>
                <HomeTab />
            </main>
        </>
    );
};
