import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Dashboard, RegistrationPage, LoginPage } from '@pages';
import Loader from '@component/spinnerLoader/spinnerLoader';
import { withAuth } from '@hoc/withAuth';

import {
    isAuth,
    isToken,
    isLoading,
    error,
    getToken,
} from '@redux/user/user-selector';
import { userOperation } from '@redux/user/user-operation';

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
