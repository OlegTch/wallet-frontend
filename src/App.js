import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '@pages';
// import { Statistic } from './pages/statistic';
import { withAuth } from '@hoc/withAuth';
import LoginPage from '@pages/login';
import Loader from '@component/spinnerLoader/spinnerLoader';

import {
    isAuth,
    isToken,
    isLoading,
    error,
    getToken,
} from '@redux/user/user-selector';
import { userOperation } from '@redux/user/user-operation';
import { RegistrationPage } from './pages';

function App() {
    const isUserToken = useSelector(isToken);
    const isUserAuth = useSelector(isAuth);
    const loading = useSelector(isLoading);
    const isError = useSelector(error);
    const token = useSelector(getToken);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isUserToken && !isUserAuth) {
            dispatch(userOperation.currentUser(token));
        } else {
            dispatch(
                userOperation.login({
                    email: 'test@gmail.com',
                    password: 'qwerty',
                }),
            );
        }
    }, []);

    return (
        <>
            {loading && <Loader />}
            {isError && <h1>Error: {isError}</h1>}
            {!loading && !isError && isUserAuth === isUserToken && (
                <Routes>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegistrationPage />} />

                    <Route path="/" element={withAuth(isUserAuth)} />
                    <Route
                        path="/*"
                        element={withAuth(isUserAuth, <Dashboard />)}
                    />
                </Routes>
            )}
        </>
    );
}

export default App;
