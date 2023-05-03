import React, { useState } from 'react'
import API from '../../utils/API'
import { useNavigate } from 'react-router-dom'
// ************************************************************
// ************************************************************
// !!!!!!!!!!!!!!!!  IMPORT USEDISPATCH! !!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!  IMPORT ANY ACTIONS FOR THE DISPATCH ! !!!!!!!
// ************************************************************
// ************************************************************
import { useDispatch } from 'react-redux'
import { loginAction } from '../../redux/actions/authActions'
 import './modals.css'

function SignUp(props) {
    const dispatch = useDispatch()
    const [signUpUser, setSignUpUser] = useState({
        first: '',
        last: '',
        email: '',
        psw: '',
        pswRepeat: ''
    })

    let navigate = useNavigate()

    const signUpChange = (e) => {
        let { name, value } = e.target
        setSignUpUser({
            // this gives access to all the keys in the signUpUser state through one handler
            ...signUpUser,
            [name]: value
        })
    }

    const register = (e) => {
        e.preventDefault()
        if (signUpUser.pswRepeat !== signUpUser.psw) return alert('password does not match')
        let newUser = {
            email: signUpUser.email,
            password: signUpUser.psw,
            first: signUpUser.first,
            last: signUpUser.last,
        }

        API.registerUser(newUser).then(async (res) => {
            console.log(res.data)
           dispatch(loginAction(res.data))

            if (res.data) {
                navigate('/home')
            } else {
                alert("Please repeat password")
            }
        })
    }


    const openModal = () => {
        // Get the modal
        var modal = document.getElementById('id02'); modal.style.display = 'block';

        // When the user clicks anywhere outside of the modal, it closes
        window.addEventListener('click', function (event) {
            // console.log(event.target)
            // console.log(modal)
            if (event.target == modal) {
                modal.style.display = "none";
            }
        })
    }

    const closeModal = () => {
        document.getElementById('id02').style.display = 'none'
    }


    return (
        <div>

            <button
                onClick={openModal}
                className="btn btn-primary btn-lg l-s-btns btn-right">
                <i className="fab fa-wpforms" style={{ paddingRight: "5px" }} />
                SIGN UP
            </button>

            <div id="id02" className="modal">


                <form
                    onSubmit={register}
                    className="modal-content animate"
                >
                    <span
                        onClick={closeModal}
                        className="close"
                        title="Close Modal">
                        &times;
                    </span>

                    <div className="container">

                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />

                        <label htmlFor="first"><b>First Name</b></label>
                        <input
                            type="text"
                            name="first"
                            placeholder="First Name"
                            onChange={(e) => signUpChange(e)}
                            required
                        />

                        <label htmlFor="last"><b>Last Name</b></label>
                        <input
                            type="text"
                            name="last"
                            placeholder="Last Name"
                            onChange={(e) => signUpChange(e)}
                            required
                        />

                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            onChange={(e) => signUpChange(e)}
                            required
                        />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input
                            type="password"
                            name="psw"
                            placeholder="Enter Password"
                            onChange={(e) => signUpChange(e)}
                            required
                        />

                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input
                            type="password"
                            name="pswRepeat"
                            placeholder="Repeat Password"
                            onChange={(e) => signUpChange(e)}
                            required
                        />



                        <div className="clearfix" >

                            <button
                                type="button"
                                onClick={closeModal}
                                className="signup-cancel-btn" >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="signup-btn"
                            >
                                Sign Up
                            </button>

                        </div>
                       

                    </div>
                </form>

            </div>
        </div>
    )
}
export default SignUp