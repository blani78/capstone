import React from 'react'
import Day from './Day'
import { useSelector} from 'react-redux'

export default function Week() {
    const taskState = useSelector(state => state.tasks)
    
    let dayArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
   
    return (
        <div>
            {dayArr.map((day, i) => <Day day={day} key={i} tasks={taskState} />)}
        </div>
    )
}