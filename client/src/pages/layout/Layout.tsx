import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/rootReducer'
import { UserState } from '../../redux/auth/authReducer'
import styles from './layout.module.scss'
import Navigatin from './Navigation'

export default function Registration() {
  const { user, isAuth }: UserState = useSelector(
    (state: AppState) => state.auth
  )

  return (
    <div className={styles.layout}>
      <Navigatin />

      <h1>
        Hello {isAuth ? user?.email : 'Guest'}!!!!!!!!
        {process.env.NODE_ENV}
      </h1>
      <Outlet />
    </div>
  )
}
