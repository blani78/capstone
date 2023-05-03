import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SignIn from './Sign-in-page/Sign-in'


export default function LoginLanding(props) {
    let navigate = useNavigate()
    const authState = useSelector(state => state.auth)
    // keeps record of the last place youve been
    // fires every time the page reloads on refresh
    useEffect(() => {
        console.log(authState.isAuth)
        if (authState.isAuth) {
            let saved = localStorage.getItem('history')
            let parsed = JSON.parse(saved)
            navigate(parsed.history)
            // navigate('/home')
        } else {
            navigate('/')
        }    
    }, [])
    // removed authState.isAuth from dependencies array on line 22

    return (
        // header component
        <div className="login-landing-container">
            <div >
                <h1 className="landing-header">Welcome</h1>
                <p className="landing-lead">This is my Persevere capstone project.</p>
                <hr className="my-4 break"></hr>
                <p className='landing-lead2' >It is an example of a Full M.E.R.N. Stack</p>
                
            </div>
            <div className='sign-in-div' >
                <SignIn setUserData={props.setUserData}/>
            </div>
            <div className='bottom-div' ></div>
        </div>
    )
}