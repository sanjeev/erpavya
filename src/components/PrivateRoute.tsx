import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectToken, selectUser } from '../features/auth/authSlice';
import { useCookies } from 'react-cookie';

const PrivateRoute = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const [cookies] = useCookies('token');

    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    //console.log(token);
    //console.log(user);
    //console.log(cookies.token);

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isAuthenticated || cookies.token ? <Outlet /> : <Navigate to="/auth/signin" />;
}

export default PrivateRoute;