import { TextField, Button, Paper } from '@mui/material'
import React, {useState} from 'react'
import { submitLogin } from '../../requests'
import { useDispatch } from 'react-redux'

const Login = ({switchForm}) => {

    const dispatch = useDispatch()
    const [loginObject, setLoginObject] = useState({
        username: '',
        password: ''
    })

    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        submitLogin(loginObject)
        .then(data => {
            if (data){
                localStorage.setItem('jwt', data.jwt)
                dispatch({type:'LOGIN', payload:data.user})
            }
        })
    }

    const handleFormChange = (e) => {
        setLoginObject({
            ...loginObject,
            [e.target.id]: e.target.value
        })

    }


    return (
        <div className='auth-form'>
            <h1>Login</h1>
            <form onSubmit={handleFormSubmit} onChange={handleFormChange}>
            
            <TextField fullWidth id='username' value={loginObject.username.toLowerCase()} label='Username' />
            <TextField fullWidth id='password' value={loginObject.password} type='password' label='Password' />
            <Button type='submit' variant='contained'>LOGIN</Button>


            </form>
            <p className='switch-auth-button' onClick={switchForm}>Don't have an account? Register</p>
        </div>
    )
}

export default Login
