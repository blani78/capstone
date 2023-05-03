import axios from 'axios' // axios is the bridge between the front(react) and the back
const {REACT_APP_BASE_URL}=process.env
// API contains all axios functions
const API = {
    loginUser: (user) => {
        return axios.post(REACT_APP_BASE_URL + '/findUser', user)
    },
    registerUser: (newUser) => {
       return axios.post(REACT_APP_BASE_URL + '/register', newUser)
    },
    editUser: (user) => {
      return axios.post(`${REACT_APP_BASE_URL}/editUser`, user)  
    },
    getTask: (user) => {
        return axios.get(`${REACT_APP_BASE_URL}/task/getTasks/${user}`)
    },
    postTask: async (task) => {
        return await axios.post(REACT_APP_BASE_URL + '/task/postTask', task)
    },
    removeTask: (task) => {
        return axios.post(REACT_APP_BASE_URL + '/task/removeTask', task)
    },
}

export default API