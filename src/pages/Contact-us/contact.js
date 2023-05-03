import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import { AppNavBar } from "../../components/Navbar/Navbar"

export default function Contact(props) {

    // keeps track of current location
    let location = useLocation()

    useEffect(()=>{
        let saved = localStorage.getItem('history')
        let parsed = JSON.parse(saved)
        parsed.history = location.pathname
        localStorage.setItem('history', JSON.stringify(parsed))
    })

    return(
        <div>
            <AppNavBar setUserData={props.setUserData} />
            <h1 className='title-header' >Contact Us</h1>
        </div>
    )
}