import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'



const NavBar = () => {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.session)

    const handleLogoutClick = () => {
        localStorage.setItem('jwt', null)
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <div className='header-container'>
            <div className='header-third'>
                <p>Dungeon Matrix</p>
            </div>
            <div className='header-third'>
                <p>Welcome, {userData.username}</p>
            </div>
            <div className='header-third'>
                <Button variant='contained' onClick={handleLogoutClick}>LOGOUT</Button>
            </div>
        </div>
    )
}

export default NavBar
