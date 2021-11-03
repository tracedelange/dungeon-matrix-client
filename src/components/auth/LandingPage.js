import React, {useState} from 'react'
import Login from './Login'
import Signup from './Signup'

const LandingPage = () => {

    const [loginShowing, setLoginShowing] = useState(true)

    return (
        <div>
            {loginShowing ?
            <Login switchForm={() => setLoginShowing(!loginShowing)}/>
            :
            <Signup switchForm={() => setLoginShowing(!loginShowing)} />
            }
        </div>
    )
}

export default LandingPage
