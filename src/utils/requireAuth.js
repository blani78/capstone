import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


function RequireAuth() {
  const authState = useSelector(state => state.auth)
    console.log(authState.isAuth)
    if (authState.isAuth) {
        return <Outlet />
    }else {
        return <Navigate to='/' />
    }
}

export default RequireAuth