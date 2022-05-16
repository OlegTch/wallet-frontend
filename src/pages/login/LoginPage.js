import React from 'react';
import { useSelector } from 'react-redux';
import { RegistrationForm } from '../../component';
import LoginForm from '../../component/loginForm';
import { isLoading } from '../../redux/user/user-selector';
// import RegisterForm from '../register/RegisterForm';
// import Dashboard from '../dashboard/Dashboard';

const LoginPage = () => {
    const isLoggedIn = useSelector(isLoading);
    return (
        <div>
            {/* <RegistrationForm /> */}
            <LoginForm />
            {/* {isLoggedIn ? <Dashboard /> : <RegisterForm />} */}
        </div>
    );
};
export default LoginPage;
