import { LOGIN_USER, UPDATE_USER, LOGOUT_USER } from '../types/authTypes'

export const loginAction = (dataObj) => {
  // dataObj = res.data from the api call to the data base 
  return {
    type: LOGIN_USER,
    payload: dataObj
  }
}
export const logoutAction = () => {
  // dataObj = res.data from the api call to the data base 
  return {
    type: LOGOUT_USER
  }
}
export const updateUserAction = (dataObj) => {
  return {
    type: UPDATE_USER,
    payload: dataObj
  }
}