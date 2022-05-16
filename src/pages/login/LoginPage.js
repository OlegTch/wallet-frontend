import React from 'react';
// import { useSelector } from 'react-redux';
import LoginForm from '../../component/loginForm';
// import { isLoading } from '../../redux/user/user-selector';
// import RegisterForm from '../register/RegisterForm';
// import Dashboard from '../dashboard/Dashboard';
const LoginPage = () => {
    // const isLoggedIn = useSelector(isLoading);
    return (
        <div>
            {/* <RegisterForm /> */}
            <LoginForm />
            {/* {isLoggedIn ? <Dashboard /> : <RegisterForm />} */}
        </div>
    );
};
export default LoginPage;
