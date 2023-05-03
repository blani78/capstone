import React,{ useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AppNavBar } from "../../components/Navbar/Navbar"
import Header from '../../components/Header/Header'

export default function Home(props) {

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
            <div>
            <AppNavBar />
            </div>
            <div>
            <Header/> 
            </div>
            
        </div>
    )
}