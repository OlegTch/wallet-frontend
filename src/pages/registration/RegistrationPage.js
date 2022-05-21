import { useEffect } from 'react';
import { RegistrationForm } from '../../component';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isAuth } from '@redux/user/user-selector';


const RegistrationPage = () => {
    const push = useNavigate();
    const isAutorization = useSelector(isAuth);

    useEffect(() => {
        if (isAutorization) {
            push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAutorization]);
    return (
        <>
            <RegistrationForm />
        </>
    );
}
export default RegistrationPage;
