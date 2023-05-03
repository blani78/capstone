import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../../redux/actions/authActions'
import './navbar.css'

export const AppNavBar = () => {
    const dispatch = useDispatch()
    function logOut() {
        dispatch(logoutAction())
        sessionStorage.clear()
    }
    
    // function for my hamburger button / responsive nav
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (
        <div>
            <div className="topnav" id='myTopnav' >

                <Link to='/home' className="fa home "  >
                    HOME
                </Link>

                <Link to='/planner' className="fa nav-link" >
                    Planner
                </Link>

                <Link to='/contact' className='fa nav-link '>
                    Contact Us
                </Link>

                <Link to="/" onClick={logOut} className='fa nav-link'>
                    Logout
                </Link>

                <Link to="#" className='icon' onClick={myFunction}>
                    &#9776;
                </Link>

            </div>

        </div>
    )
}

