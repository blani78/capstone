import React, { useState } from 'react'

import Login from '../../../components/Modals/Login'
import SignUp from '../../../components/Modals/Sign-up'


function SignIn(props) {
    return (

        <div className='sign-in-container'>
            
                <Login setUserData={props.setUserData} />
                <SignUp setUserData={props.setUserData} />
            
        </div>

    )
}

export default SignIn