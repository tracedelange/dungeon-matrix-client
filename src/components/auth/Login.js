import { TextField, Button, Paper } from '@mui/material'
import React, {useState} from 'react'

const Login = ({switchForm}) => {

    const [loginObject, setLoginObject] = useState({
        username: '',
        password: ''
    })

    const handleFormChange = (e) => {
        setLoginObject({
            [e.target.id]: e.target.value
        })

    }

    console.log(loginObject)

    return (
        <div className='auth-form'>
            <h1>Login</h1>
            <form onChange={handleFormChange}>
            
            <TextField fullWidth id='username' label='Username' />
            <TextField fullWidth id='password' type='password' label='Password' />
            <Button variant='contained'>LOGIN</Button>


            </form>
            <p onClick={switchForm}>Don't have an account? Register</p>
        </div>
    )
}

export default Login
