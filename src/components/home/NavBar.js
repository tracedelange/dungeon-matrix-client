import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'



const NavBar = () => {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.session)

    const handleLogoutClick = () => {
        localStorage.setItem('jwt', null)
        dispatch({type: 'LOGOUT'})
    }

    return (
        <div>
            <h1>Welcome, {userData.username}</h1>
            <Button variant='contained' onClick={handleLogoutClick}>LOGOUT</Button>
        </div>
    )
}

export default NavBar
