import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { checkAuthRequest } from './redux/auth/authAction'

import Layout from './pages/layout/Layout'
import Registration from './pages/registration/Registration'
import Login from './pages/login/Login'

// import { AppState } from './redux/rootReducer'
// import { UserState } from './redux/auth/authReducer'
// import { useDispatch, useSelector } from 'react-redux'
// import { checkAuthRequest } from './redux/auth/authAction'
// import styles from './style.module.scss'

export default function App() {
  // const { user, isAuth }: UserState = useSelector(
  //   (state: AppState) => state.auth
  // )

  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthRequest())
    }
  }, [dispatch])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <>
    // <h1 className={styles.header}>
    //   Hello {isAuth ? user?.email : 'Guest'}!!!!!!!!
    //   {process.env.NODE_ENV}
    // </h1>
    //   <button
    //     onClick={() =>
    //       dispatch(
    //         registrationRequest({
    //           email: 'wwsjdrfffw@eee.yt',
    //           password: 'dddsssaaa',
    //         })
    //       )
    //     }
    //   >
    //     Reg
    //   </button>
    //   <button
    //     onClick={() =>
    //       dispatch(
    //         loginRequest({
    //           email: 'wwsjdrfffw@eee.yt',
    //           password: 'dddsssaaa',
    //         })
    //       )
    //     }
    //   >
    //     Login
    //   </button>
    //   <button onClick={() => dispatch(logOutRequest())}>LogOut</button>
    //   <button onClick={() => dispatch(checkAuthRequest())}>Check</button>
    // </>
  )
}
