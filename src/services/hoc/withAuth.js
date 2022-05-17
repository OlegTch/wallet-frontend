import { Navigate } from 'react-router-dom';

export const withAuth = (isAuth, Component) => {
    if (isAuth) {
        return Component ? Component : <Navigate to="/home" />;
    } else {
        return <Navigate to="/login" />;
    }
};
