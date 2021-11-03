import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'

const Signup = ({ switchForm }) => {

    const [signupObject, setSignupObject] = useState({
        username: '',
        password: '',
        password_confirmation: ''
    })

    const handleFormChange = (e) => {
        setSignupObject({
            [e.target.id]: e.target.value
        })

    }


    return (
        <div className='auth-form'>
            <h1>Signup</h1>
            <form onChange={handleFormChange}>
                <TextField fullWidth id='username' label='Username' />
                <TextField fullWidth id='password' type='password' label='Password' />
                <TextField fullWidth id='password_confirmation' type='password' label='Confirm Password' />
                <Button variant='contained'>signup</Button>
            </form>
            <p onClick={switchForm}>Don't have an account? Register</p>
        </div>
    )
}

export default Signup
