import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { LoginForm } from '@component/loginForm';
import { isAuth, isErrorUser } from '@redux/user/user-selector';

const LoginPage = () => {
    const isLoggedIn = useSelector(isAuth);
    const errorUser = useSelector(isErrorUser);
    const push = useNavigate();

    useEffect(() => {
        if (errorUser) {
            toast.error(errorUser);
        }
    }, [errorUser]);

    useEffect(() => {
        if (isLoggedIn) {
            push('/');
        }
    }, [isLoggedIn, push]);

    return (
        <div>
            <LoginForm />
        </div>
    );
};
export default LoginPage;
