import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/rootReducer'
import { UserState } from '../../redux/auth/authReducer'
import styles from './layout.module.scss'

export default function Registration() {
  const { user, isAuth }: UserState = useSelector(
    (state: AppState) => state.auth
  )
  // const pr = process.env.PORT
  // console.log(pr)
  return (
    <div className={styles.layout}>
      <nav className={styles.navigation}>
        <Link to="/">Home</Link> |<Link to="signup">Registration</Link> |
        <Link to="login">Login</Link>|
        <Link to="createproduct">create Product</Link> |{' '}
        <Link to="products"> Products</Link>
      </nav>
      <h1>
        Hello {isAuth ? user?.email : 'Guest'}!!!!!!!!
        {process.env.NODE_ENV}
      </h1>
      <Outlet />
    </div>
  )
}
