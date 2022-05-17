// import './App.scss';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '@pages';
import { Statistic } from './pages/statistic';
import { withAuth } from '@hoc/withAuth';
import LoginPage from '@pages/login';
import Loader from '@component/spinnerLoader/spinnerLoader';
// import { withAuth } from '@hoc';

import { isAuth, isToken, isLoading, error } from '@redux/user/user-selector';
import { userOperation } from '@redux/user/user-operation';
// import LoginPage from './pages/login';
import { RegistrationPage } from './pages';

function App() {
    const isUserToken = useSelector(isToken);
    const isUserAuth = useSelector(isAuth);
    const loading = useSelector(isLoading);
    const isError = useSelector(error);
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log('Use effect');
        if (isUserToken && !isUserAuth) {
            dispatch(userOperation.currentUser());
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
                    {/* <Route path="register" element={<RegistrationPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route
                        path="/"
                        element={withAuth(isUserAuth, <Dashboard />)}
                    >
                        <Route
                            path="/*"
                            element={withAuth(isUserAuth, <Dashboard />)}
                        />
                        <Route
                            path="/home"
                            element={withAuth(isUserAuth, <Dashboard />)}
                        />
                        <Route
                            path="/diagram"
                            element={withAuth(isUserAuth, <Dashboard />)}
                        />
                        <Route
                            path="/currency"
                            element={withAuth(isUserAuth, <Dashboard />)}
                        />

                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Route>
                    <Route
                        path="statistic"
                        element={withAuth(isUserAuth, <Statistic/>)}
                        path="diagram"
                        element={withAuth(isUserAuth, <h1>Statistics</h1>)}
                    />
                    <Route
                        path="currency"
                        element={withAuth(isUserAuth, <h1>Currency</h1>)}
                    /> */}
                    {/* <Route
                        path="/home"
                        element={<Dashboard />}
                        // element={withAuth(isUserAuth, <Dashboard />)}
                    /> */}
                    {/* <Route
                        path="/diagram"
                        element={withAuth(isUserAuth, <Dashboard />)}
                    /> */}
                    {/* <Route
                        path="/currency"
                        element={withAuth(isUserAuth, <Dashboard />)}
                    /> */}

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
