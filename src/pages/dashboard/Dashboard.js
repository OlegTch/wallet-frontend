import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Media from 'react-media';

import {
    Header,
    Balans,
    Navigation,
    ModalTransaction,
    Backdrop,
} from '@component';
import Currency from '@component/currency';
import HomeTab from '@component/homeTab';
import ButtonClose from '@component/buttonClose/buttonClose';

import { categoriesOperation } from '@redux/categories/categories-operation';
import { getFinanceOpertaion } from '@redux/finance/finance-operation';
// import { statisticOperation } from '@redux/statistic/statistic-operation';
import {
    openModalTransaction,
    clearSaveModalDateStatic,
} from '@redux/finance/finance-slice';
import {
    isModalTransaction,
    isSaveModalDateStatic,
} from '@redux/finance/finance-selector';
import { isModalLogout } from '@redux/user/user-selector';
import { isCategoriesFull } from '@redux/categories/categories-selector';
import { globalMedia } from '@data';

import { Statistic } from '@pages/statistic';

export const Dashboard = () => {
    const dispatch = useDispatch();
    const isCategories = useSelector(isCategoriesFull);
    const isOpenModalTransaction = useSelector(isModalTransaction);
    const isOpenModalLogout = useSelector(isModalLogout);
    const isSaveTransaction = useSelector(isSaveModalDateStatic);

    const onOpenModalTransaction = () => {
        dispatch(openModalTransaction());
    };

    useEffect(() => {
        if (!isCategories) {
            dispatch(categoriesOperation.getCategories());
        }
        // dispatch(getFinanceOpertaion.getOperations());
        // dispatch(statisticOperation.getStatistic());
    }, []);

    useEffect(() => {
        if (isSaveTransaction && !isModalTransaction) {
            dispatch(getFinanceOpertaion.getOperations());
            dispatch(clearSaveModalDateStatic());
        }
    }, [isSaveTransaction, isOpenModalTransaction]);

    return (
        <>
            <Header />
            <main>
                <div className="container container__main">
                    <div className="main dashboardMain">
                        <Media queries={globalMedia}>
                            {matches => (
                                <>
                                    {matches.small && (
                                        <>
                                            <Navigation />
                                            <Routes>
                                                <Route
                                                    path="home"
                                                    element={<Balans />}
                                                />
                                                <Route path="diagram" />
                                                <Route
                                                    path="currency"
                                                    element={<Currency />}
                                                />
                                                <Route
                                                    path="*"
                                                    element={<h1>Not Found</h1>}
                                                />
                                            </Routes>
                                        </>
                                    )}
                                    {matches.medium && (
                                        <div className="main_block">
                                            <div>
                                                <Navigation />
                                                <Balans />
                                            </div>
                                            <Currency />
                                        </div>
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
                                    <ButtonClose
                                        onClick={onOpenModalTransaction}
                                    />
                                </>
                            }
                        />
                        <Route
                            path="/currency"
                            element={
                                <Media queries={globalMedia}>
                                    {matches => (
                                        <>
                                            {matches.medium && (
                                                <>
                                                    <HomeTab />
                                                    <ButtonClose
                                                        onClick={
                                                            onOpenModalTransaction
                                                        }
                                                    />
                                                </>
                                            )}
                                        </>
                                    )}
                                </Media>
                            }
                        />
                        <Route path="/diagram" element={<Statistic />} />
                    </Routes>
                </div>
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
