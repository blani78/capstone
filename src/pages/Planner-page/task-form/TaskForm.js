import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import API from '../../../utils/API'
import { addTaskAction } from '../../../redux/actions/taskActions'
// import the action used to update the reducer

function TaskForm(props) {
    const dispatch = useDispatch()
    const userState = useSelector(state =>  state.auth.user)

    const [task, setTask] = useState({
        userId: '',
        taskText: "",
        time: "",
        day: ""
    })

    useEffect(() => {
        // grab our user id from UserState and set the user id in local state for the task

        setTask({
            ...task,
            userId: userState._id // userState user _id
        })
    }, [])


    const handleChange = (e) => {
        let { name, value } = e.target
        setTask({
            ...task,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // Make our API call and dispatch the results
        API.postTask(task).then((res) => {
            console.log(res)
            dispatch(addTaskAction(res.data))
        })
        setTask({
            ...task,
            taskText: "",
            time: "",
            day: ""
        })
    }
    return (
    <form className='form-div' onSubmit={(e)=>handleSubmit(e)}>
        <input className='task-input' name='taskText' required type='text' placeholder='Type Text Here' value={task.taskText} onChange={(e) =>handleChange(e)} />
        <div className='time-day-container'>
            <input
                required
                className='time'
                name='time'
                onChange={(e) => handleChange(e)}
                type='time'
                value={task.time}
            />
            <div className='day'>
                <select name='day' onChange={(e) => handleChange(e)} value={task.day} required>
                    <option value={null}>Pick Day</option>
                    <option value='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
                    <option value='Sunday'>Sunday</option>
                </select>
            </div>
        </div>
        <input 
            type='submit' 
            className='planner-form-submit' 
        />
    </form>
    )

}
export default TaskForm