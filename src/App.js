// import './App.scss';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '@pages';
import { withAuth } from '@hoc/withAuth';

import { isAuth, isToken, isLoading, error } from '@redux/user/user-selector';
import { userOperation } from '@redux/user/user-operation';
import LoginPage from './pages/login';
import Currency from './component/currency/Currency.jsx'

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
            {loading && <h1>Loading ...</h1>}
            {isError && <h1>Error: {isError}</h1>}
            {!loading && !isError && isUserAuth === isUserToken && (
                <Routes>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<h1>Registration</h1>} />
                    {/* <Route
                        path="/"
                        // element={withAuth(isUserAuth, <Dashboard />)}
                    > */}
                    <Route
                        path="/*"
                        element={withAuth(isUserAuth, <Dashboard />)}
                    />
                    {/* <Route
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
                        <Route path="*" element={<h1>Not Found</h1>} /> */}
                    {/* </Route> */}
                    {/* <Route
                        path="diagram"
                        element={withAuth(isUserAuth, <h1>Statistics</h1>)}
                    /> */}
                    <Route
                        path="currency"
                        element={withAuth(isUserAuth, <Currency/>)}
                    />
                </Routes>
            )}
        </>
    );
}

export default App;
