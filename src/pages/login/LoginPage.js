
import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { LoginForm } from '@component/loginForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { isAuth } from '@redux/user/user-selector';


const LoginPage = () => {
    const push = useNavigate();
    const isLoggedIn = useSelector(isAuth);

    useEffect(() => {
        if (isLoggedIn) {
            push('/');
        }
    }, [isLoggedIn]);

    return (
        <div>
            <LoginForm />
        </div>
    );
};
export default LoginPage;
