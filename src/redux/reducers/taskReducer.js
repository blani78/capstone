import { ADD_TASK, GET_TASKS } from '../types/taskTypes';

const initialState = {
  task: [],
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      console.log(action.payload, "REDUCER")
      return {
        ...state,
        task: [...state.task,action.payload]
      };
    case GET_TASKS:
      return {
        ...state,
        task: [...action.payload]
      }
    default:
      return state;
  }
}
