import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AppNavBar } from "../../components/Navbar/Navbar"
import { useSelector, useDispatch } from 'react-redux'
import { getTasks } from '../../redux/actions/taskActions'
import Week from './task-form/week/Week'
import TaskForm from './task-form/TaskForm'
import API from '../../utils/API'


export default function Planner(props) {
    const userState = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    let location = useLocation()
    useEffect(() => {
        let saved = localStorage.getItem('history')
        let parsed = JSON.parse(saved)
        parsed.history = location.pathname
        localStorage.setItem('history', JSON.stringify(parsed))
    })
    useEffect(() => {
        API.getTask(userState._id).then((res, err) => {
            dispatch(getTasks(res.data))
        }) 
    })

    return (
        <div className='planner-div'>
            <div>
            <AppNavBar setUserData={props.setUserData} />
            </div>
            <h1 className='planner-header' >Weekly Planner</h1>
            <TaskForm />
            <Week />
        </div>
    )
}