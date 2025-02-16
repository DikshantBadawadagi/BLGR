import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutButton() {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }

  return (
    <button className='inline-block px-6 py-2 duration-200 text-white bg-black hover:bg-white hover:text-black border border-black' onClick={logoutHandler} type='button'>Logout</button>
  )
}

export default LogoutButton