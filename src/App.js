import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// import { Dashboard, RegistrationPage, LoginPage } from '@pages';
import { Error } from '@component';
import Loader from '@component/spinnerLoader/spinnerLoader';
import { withAuth } from '@hoc/withAuth';

import {
    isAuth,
    isToken,
    isLoading,
    getToken,
} from '@redux/user/user-selector';
import { userOperation } from '@redux/user/user-operation';
import { clear } from '@redux/global/global-action';

const Dashboard = lazy(() => import('./pages/dashboard'));
const RegistrationPage = lazy(() => import('./pages/registration'));
const LoginPage = lazy(() => import('./pages/login'));

function App() {
    const dispatch = useDispatch();
    const isUserToken = useSelector(isToken);
    const isUserAuth = useSelector(isAuth);
    const loading = useSelector(isLoading);
    const token = useSelector(getToken);

    useEffect(() => {
        if (isUserToken && !isUserAuth) {
            dispatch(userOperation.currentUser(token));
        }
    }, []);

    useEffect(() => {
        console.log('Use effect in app', isUserAuth);
        if (!isUserAuth) {
            dispatch(clear());
        }
    }, [isUserAuth]);

    return (
        <>
            <Suspense fallback={<Loader />}>
                {!loading && isUserAuth === isUserToken && (
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
                <Error />
            </Suspense>
        </>
    );
}

export default App;
