import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LoginForm } from '@component/loginForm';
// import { isLoading } from '../../redux/user/user-selector';
// import { RegistrationPage } from '../registration/RegistrationPage';
// import { Dashboard } from '@pages';

// import { isAuth } from '@redux/user/user-selector';
// import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    // const isAuthUser = useSelector(isAuth);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (isAuthUser) {
    //         navigate('/');
    //     }
    // }, [isAuthUser]);

    // const isLoggedIn = useSelector(isLoading);
    // console.log(isLoggedIn);
    return (
        <div>
            {/* <RegistrationPage />
            <Dashboard /> */}
            <LoginForm />
            {/* {isLoggedIn ? <Dashboard /> : <RegistrationPage />} */}
        </div>
    );
};

export default LoginPage;
