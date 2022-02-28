import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  loginRequest,
  logOutRequest,
  registrationRequest,
  checkAuthRequest,
} from './redux/auth/authAction'

import styles from './style.module.scss'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthRequest())
    }
  }, [dispatch])
  return (
    <>
      <h1 className={styles.header}>
        Hello Vape!!!!!!!!
        {process.env.NODE_ENV}
      </h1>
      <button
        onClick={() =>
          dispatch(
            registrationRequest({
              email: 'wwsjdrfffw@eee.yt',
              password: 'dddsssaaa',
            })
          )
        }
      >
        Reg
      </button>
      <button
        onClick={() =>
          dispatch(
            loginRequest({
              email: 'wwsjdrfffw@eee.yt',
              password: 'dddsssaaa',
            })
          )
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logOutRequest())}>LogOut</button>
      <button onClick={() => dispatch(checkAuthRequest())}>Check</button>
    </>
  )
}
