import { useEffect, lazy, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Media from 'react-media';

import Header from '@component/header';
import Balans from '@component/balans';
import Navigation from '@component/navigation';
import ModalDelete from '@component/modalDelete';

import { ModalTransaction, Backdrop, ModalLogout } from '@component';

import Currency from '@component/currency';
import HomeTab from '@component/homeTab';
import ButtonClose from '@component/buttonClose/buttonClose';

import { categoriesOperation } from '@redux/categories/categories-operation';
import { getFinanceOpertaion } from '@redux/finance/finance-operation';
import {
    openModalTransaction,
    clearSaveModalDateStatic,
} from '@redux/finance/finance-slice';
import {
    isModalTransaction,
    isSaveModalDateStatic,
    isDeleteTransaction,
    isTransactionDeleting,
    isLoading,
} from '@redux/finance/finance-selector';
import { isModalLogout } from '@redux/user/user-selector';
import { isCategoriesFull } from '@redux/categories/categories-selector';
import { globalMedia } from '@data';

const Statistic = lazy(() => import('../statistic'));

const Dashboard = () => {
    const dispatch = useDispatch();
    const isCategories = useSelector(isCategoriesFull);
    const isOpenModalTransaction = useSelector(isModalTransaction);
    const isOpenModalLogout = useSelector(isModalLogout);
    const isSaveTransaction = useSelector(isSaveModalDateStatic);
    const isDeletingTrans = useSelector(isTransactionDeleting);
    const isModalDelTransaction = useSelector(isDeleteTransaction);
    const isLoadingTransaction = useSelector(isLoading);
    console.log('isLoading Transaction', isLoadingTransaction);
    const onOpenModalTransaction = () => {
        dispatch(openModalTransaction());
    };

    useEffect(() => {
        if (!isCategories) {
            dispatch(categoriesOperation.getCategories());
        }
    }, []);

    useEffect(() => {
        console.log('---------------------dashboard effect------------------');
        console.log(isSaveTransaction, isOpenModalTransaction);
        if (isSaveTransaction && !isOpenModalTransaction) {
            console.log('-------------------dispatch----------------');
            dispatch(getFinanceOpertaion.getOperations());
            dispatch(clearSaveModalDateStatic());
        }
    }, [isSaveTransaction, isOpenModalTransaction]);

    useEffect(() => {
        if (isDeletingTrans && !isModalDelTransaction) {
            dispatch(getFinanceOpertaion.getOperations());
            dispatch(clearSaveModalDateStatic());
        }
    }, [isDeletingTrans, isModalDelTransaction]);

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
                        <Route path="/home" element={<HomeTab />} />
                        <Route
                            path="/currency"
                            element={
                                <Media queries={globalMedia}>
                                    {matches => (
                                        <>{matches.medium && <HomeTab />}</>
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
                    <Backdrop>
                        <ModalLogout />
                    </Backdrop>
                </>
            )}
            {isModalDelTransaction && (
                <>
                    <Backdrop>
                        <ModalDelete />
                    </Backdrop>
                </>
            )}
            <Routes>
                <Route
                    path="/home"
                    element={<ButtonClose onClick={onOpenModalTransaction} />}
                />
            </Routes>
        </>
    );
};

export default Dashboard;
