import { ADD_TASK, GET_TASKS } from '../types/taskTypes'

export const addTaskAction = (dataObj) => {
  console.log(dataObj, "ADDTASK ACTION")
  return {
    type: ADD_TASK,
    payload: dataObj
  }
}
export const getTasks = (data) => {
  return {
    type: GET_TASKS,
    payload: data
  }
}