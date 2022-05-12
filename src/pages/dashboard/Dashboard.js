import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header, Balans, Navigation } from '@component';
import { categoriesOperation } from '@redux/categories/categories-operation';
import { transactionOperation } from '@redux/transaction/transaction-operation';
import { isCategoriesFull } from '@redux/categories/categories-selector';

export const Dashboard = () => {
    const dispatch = useDispatch();
    const isCategories = useSelector(isCategoriesFull);

    useEffect(() => {
        if (!isCategories) {
            dispatch(categoriesOperation.getCategories());
        }
        dispatch(transactionOperation.getTransaction());
    }, []);

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <Navigation />
                    <Balans />
                </div>
            </main>
        </>
    );
};
