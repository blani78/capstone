import { LOGIN_USER, UPDATE_USER, LOGOUT_USER } from '../types/authTypes';

const initialState = {
  isAuth: false,
  user: {},
};

export default function authReducer(state = initialState, action) {
  // action is a object coming from the useDispatch hook in the component
  // that obj look like  => {type: LOGIN_USER, payload: res.data}
  switch (action.type) {
    case LOGIN_USER:
      // Using the dot notation method allows access to the type 
      // and to the payload
      // action.type => LOGIN_USER
      return {
        ...state,  // taking a copy of state to protect any unwanted mutations of state
        isAuth: true,
        user: action.payload // action.payload => res.data
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };
      case LOGOUT_USER:
        return {
          ...state,  // taking a copy of state to protect any unwanted mutations of state
          isAuth: false,
          user: {} // 
        }
    default:
      return state;
  }
}