// import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/rootReducer'
import { UserState } from '../../redux/auth/authReducer'
// import { checkAuthRequest } from '../../redux/auth/authAction'

export default function Registration() {
  const { user, isAuth }: UserState = useSelector(
    (state: AppState) => state.auth
  )

  //   const dispatch = useDispatch()
  //   useEffect(() => {
  //     if (localStorage.getItem('token')) {
  //       dispatch(checkAuthRequest())
  //     }
  //   }, [dispatch])
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |<Link to="registration">Registration</Link> |
        <Link to="login">Login</Link>
      </nav>
      <h1>
        Hello {isAuth ? user?.email : 'Guest'}!!!!!!!!
        {process.env.NODE_ENV}
      </h1>
      <Outlet />
    </div>
  )
}
