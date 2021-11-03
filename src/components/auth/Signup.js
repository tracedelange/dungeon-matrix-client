import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import {submitSignup} from '../../requests'

const Signup = ({ switchForm }) => {

    const dispatch = useDispatch()

    const [signupObject, setSignupObject] = useState({
        username: '',
        password: '',
        password_confirmation: ''
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()
        submitSignup(signupObject)
        .then(data => {
            if (data){
                localStorage.setItem('jwt', data.jwt)
                dispatch({type:'LOGIN', payload:data.user})
            }
        })
    }

    const handleFormChange = (e) => {
        setSignupObject({
            ...signupObject,
            [e.target.id]: e.target.value
        })

    }

    return (
        <div className='auth-form'>
            <h1>Signup</h1>
            <form onSubmit={handleFormSubmit} onChange={handleFormChange}>
                <TextField value={signupObject.username.toLowerCase()} fullWidth id='username' label='Username' />
                <TextField value={signupObject.password} fullWidth id='password' type='password' label='Password' />
                <TextField value={signupObject.password_confirmation} fullWidth id='password_confirmation' type='password' label='Confirm Password' />
                <Button type='submit' variant='contained'>signup</Button>
            </form>
            <p className='switch-auth-button' onClick={switchForm}>Already have an account? Login</p>
        </div>
    )
}

export default Signup
