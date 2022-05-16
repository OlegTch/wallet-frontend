import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Media from 'react-media';

import {
    Header,
    Balans,
    Navigation,
    ModalTransaction,
    Backdrop,
} from '@component';
import HomeTab from '@component/homeTab';
import ButtonClose from '@component/buttonClose/buttonClose';
// import { getFinanceOpertaion } from '@redux/finance/finance-operation';
import { categoriesOperation } from '@redux/categories/categories-operation';
import { statisticOperation } from '@redux/statistic/statistic-operation';
import { openModalTransaction } from '@redux/finance/finance-slice';
import { isModalTransaction } from '@redux/finance/finance-selector';
import { isModalLogout } from '@redux/user/user-selector';
import { isCategoriesFull } from '@redux/categories/categories-selector';
import { globalMedia } from '@data';

export const Dashboard = () => {
    const dispatch = useDispatch();
    const isCategories = useSelector(isCategoriesFull);
    const isOpenModalTransaction = useSelector(isModalTransaction);
    const isOpenModalLogout = useSelector(isModalLogout);

    const onOpenModalTransaction = () => {
        dispatch(openModalTransaction());
    };

    useEffect(() => {
        if (!isCategories) {
            dispatch(categoriesOperation.getCategories());
        }
        // dispatch(getFinanceOpertaion.getOperations());
        dispatch(statisticOperation.getStatistic());
    }, []);

    return (
        <>
            <Header />
            <main className="main dashboardMain">
                <div className="container">
                    <Navigation />
                    <Media queries={globalMedia}>
                        {matches => (
                            <>
                                {matches.small && (
                                    <Routes>
                                        <Route
                                            path="home"
                                            element={<Balans />}
                                        />
                                        <Route path="diagram" />
                                        <Route
                                            path="currency"
                                            element={<h1>Currency</h1>}
                                        />
                                        <Route
                                            path="*"
                                            element={<h1>Not Found</h1>}
                                        />
                                    </Routes>
                                )}
                                {matches.medium && (
                                    <>
                                        <Balans />
                                        <h1>Currency</h1>
                                    </>
                                )}
                            </>
                        )}
                    </Media>
                </div>
                <Routes>
                    <Route
                        path="/home"
                        element={
                            <>
                                <HomeTab />
                                <ButtonClose onClick={onOpenModalTransaction} />
                            </>
                        }
                    />
                    <Route path="/diagram" element={<h1>Diagram</h1>} />
                </Routes>
            </main>
            {isOpenModalTransaction && (
                <>
                    <Backdrop>
                        <ModalTransaction />
                    </Backdrop>
                </>
            )}
            {isOpenModalLogout && (
                <>
                    <Backdrop></Backdrop>
                </>
            )}
        </>
    );
};
