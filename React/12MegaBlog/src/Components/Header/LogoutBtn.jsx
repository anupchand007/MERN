import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import authService from "../../appwrite/auth"
import { logout } from "../../Store/authSlice"

const LogoutBtn = () => {
    const dispatch = useDispatch();

    const logoutHandler = useCallback(() => {
        authService.logout()
            .then(() => {
                dispatch(logout())
            })
            .catch((error) => {
                console.error('Logout failed:', error)
            })
    }, [dispatch]);

    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default React.memo(LogoutBtn)
