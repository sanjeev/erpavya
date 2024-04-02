import React from 'react';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { logout } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

function SignoutButton() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('token');
    removeCookie('user');
    dispatch(logout());
    navigate('/auth/signin');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default SignoutButton;