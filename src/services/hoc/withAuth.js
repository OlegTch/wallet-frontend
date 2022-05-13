import { Navigate } from 'react-router-dom';

export const withAuth = (isAuth, Component) => {
    return isAuth ? Component : <Navigate to="/login" />;
};
