import React from 'react'
import { useSelector } from 'react-redux'
import './header.css'
import EditProfile from '../Modals/Edit-profile'

export default function Header() {
    const userState = useSelector(state => state.auth.user)
    // console.log(userState)
    return (
        // header component
        <div>
            <div className="jumbotron">
                <h1 className="display-4 title-header">Hello, {userState.first} {userState.last} </h1>
                <hr className='break' ></hr>
                <p className="lead top-p">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                </p>
                <hr className="my-4 break"></hr>
                <p className='bottom-p' >It uses utility classes for typography and spacing to space content out within the larger container.
                </p>
            </div>
            <div className='ep-div' >
            <EditProfile/> 
            </div>
        </div>
    )
}
