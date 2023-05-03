import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../redux/actions/authActions'
import API from '../../utils/API'
import './modals.css'

function Login(props) {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const [loginUser, setLoginUser] = useState({
        email: '',
        psw: ''

    })

    // keeps record of the last place youve been
    // fires every time the page reloads on refresh
    
    // useEffect(() => {
    //     if (props.userData) {

    //         let saved = localStorage.getItem('history')
    //         let parsed = JSON.parse(saved)
    //         if (!parsed) {
    //             navigate('/home')
    //         } else {
    //             navigate(parsed.history)
    //         }
    //     }
    // })

    const loginChange = (e) => {
        let { name, value } = e.target
        setLoginUser({
            // this gives access to all the keys in the loginUser state through one handler
            ...loginUser,
            [name]: value
        })
    }

    const login = (e) => {
        e.preventDefault()

        let user = {
            email: loginUser.email,
            password: loginUser.psw,

        }
        // The API call to the Data base 
        API.loginUser(user).then(async (res) => {
            // Res is the response from the data base as an obj
            // if the user is found the obj will look like 
            // {
            //     first: some string,
            //     last: some string,
            //     email: some email,
            //     _id: mongoose obj id
            // }
            console.log(res.data)
            // Dispatch takes the data from the res and the fires the action 
            // that sets the global state via redux (authReducer)
            // the loginAction(res.data) returns an obj and passes it as the param for the reducer
            dispatch(loginAction(res.data))
            // dispatch({type: LOGIN_USER, payload: res.data})
        
            if (res.data) {
                let saved = localStorage.getItem('history')
                let parsed = JSON.parse(saved)
                if(!parsed){
                    localStorage.setItem('history', JSON.stringify({ history: ''}))
                }
                navigate('/home')
            } else {
                console.log("Username or password is incorrect")
            }
        })
    }

    const openModal = () => {

        var modal = document.getElementById('id01'); modal.style.display = 'block';

        window.addEventListener('click', function (event) {
            // console.log(event.target)
            // console.log(modal)
            if (event.target == modal) {
                modal.style.display = "none";
            }
        })
    }

    const closeModal = () => {
        document.getElementById('id01').style.display = 'none'
    }



    return (
        <div>

            {/* <!-- Button to open the modal login form --> */}
            <button

                onClick={openModal}
                style={{ width: "auto"}}
                className="btn btn-primary btn-lg l-s-btns btn-left " >
                <i className="fa fa-user" style={{ paddingRight: "4px" }} />
                LOGIN
            </button>
            {/* <!-- The Modal --> */}
            <div id="id01" className="modal">
                {/* <!-- Modal Content --> */}
                <form
                    className="modal-content animate"
                    onSubmit={login}
                >

                    <span onClick={closeModal} className="close-login" title="Close Modal">&times;</span>

                    <div className="container">
                        <h1>Login</h1>
                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={(e) => loginChange(e)}
                            required
                        />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            onChange={(e) => loginChange(e)}
                            required
                        />

                        <button className='login-submit' type="submit">Login</button>
                        {/* <label>
                            <input
                            // this still needs functionality
                                type="checkbox"
                                checked name="remember" />
                                Remember me
                        </label> */}

                    </div>

                    <div className="container" style={{ backgroundColor: "#f1f1f1" }}>

                        <button
                            type="button"
                            onClick={closeModal}
                            className="login-cancel-btn">
                            Cancel
                        </button>



                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login