import { Navigate } from 'react-router-dom';

export const withAuth = Component => {
    const isAuth = true;
    return isAuth ? Component : <Navigate to="/login" />;
};
