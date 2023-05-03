import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import API from '../../../utils/API'
import { getTasks } from '../../../redux/actions/taskActions'

function ListMapper(props) {
    const dispatch = useDispatch()
    const userState = useSelector(state => state.auth.user)

    const handleColor = (event) => {
        if (event.target.style.backgroundColor === '') {
            event.target.style.backgroundColor = "grey";
        } else {
            event.target.style.backgroundColor = "";
        }
    }
    const deleteHandle = (id) => {
        let taskId = { _id: id }
        console.log(taskId)
        API.removeTask(taskId).then((err, res) => {
            if (err) {
             return console.log(err)
            }
        })
        API.getTask(userState._id).then((res, err) => {
            console.log(res, 'api get task ')
            dispatch(getTasks(res.data))
        }) 

    }
    
    const renderTasks = () => {
       return props.arr.length > 0 ? props.arr.map((obj, i) => {
           return (
                <li key={obj._id} id={obj._id} onClick={handleColor} className='day-li' >
                    {obj.time} - {obj.taskText}
                    <i className='fas fa-trash fa-xs delete' onClick={()=>deleteHandle(obj._id)} />
                </li>
            )
        }): "Nothing scheduled for today."
    }

    return (
        <>
            {renderTasks()}
        </>
    )

}

export default ListMapper