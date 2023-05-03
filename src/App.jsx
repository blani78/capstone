import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loginAction } from './redux/actions/authActions'
import "./App.css";
import './assets/fontawesome/fontawesome-free-5.15.4-web/css/all.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import RequireAuth from './utils/requireAuth'
import Home from './pages/Home-page/home'
import Planner from './pages/Planner-page/Planner'
import Contact from './pages/Contact-us/contact'
import LoginLanding from './pages/Login-Landing-Page/Login-landing-page'

function App() {
  const dispatch = useDispatch()
  // @ts-ignore
  const authState = useSelector(state => state.auth)
  // console.log(authState)
  // used to stay logged in
  useEffect(() => {
    // console.log(authState)
    if (!authState.user.first) {
      let saved = sessionStorage.getItem('userData')
      // console.log(saved)
      if(saved !== null){
        let parsed = JSON.parse(saved)
        // console.log(parsed.user)
       dispatch(loginAction(parsed.user))
      }
    } else {
      sessionStorage.setItem('userData', JSON.stringify(authState))
    }
  })
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginLanding />} />
        <Route element={<RequireAuth />} >
          <Route path='/home' element={<Home />}  />
          <Route path='/planner' element={<Planner />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App
