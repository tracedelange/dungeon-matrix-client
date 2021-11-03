import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


const NavBar = () => {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.session)
    const history = useHistory()


    const handleLogoutClick = () => {
        localStorage.setItem('jwt', null)
        dispatch({ type: 'LOGOUT' })
    }   

    const handleRedirect = (e) => {
        history.push(`/${e.target.id}`)
    }


    return (
        <div className='header-container'>
            <div className='header-third'>
                <p id='' onClick={handleRedirect}>Dungeon Matrix</p>
            </div>
            <div className='header-third'>
                <p id='account' onClick={handleRedirect}>Welcome, {userData.username}</p>
            </div>
            <div className='header-third'>
                <Button variant='contained' onClick={handleLogoutClick}>LOGOUT</Button>
            </div>
        </div>
    )
}

export default NavBar
