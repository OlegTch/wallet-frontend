import { useSelector } from 'react-redux';
import { LoginForm } from '@component/loginForm';
// import { isLoading } from '../../redux/user/user-selector';
import { isAuth } from '@redux/user/user-selector';

import { RegistrationPage } from '../registration/RegistrationPage';
import { Dashboard } from '@pages';

export const LoginPage = () => {
    const isLoggedIn = useSelector(isAuth);

    return (
        <div>
            {/* <RegistrationPage /> */}
            {/* <Dashboard /> */}
            <LoginForm />
            {/* {isLoggedIn ? <Dashboard /> : <RegistrationPage />} */}
            {isLoggedIn ? <Dashboard /> : <RegistrationPage />}
        </div>
    );
};
