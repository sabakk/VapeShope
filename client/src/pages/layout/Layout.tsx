import { Outlet } from 'react-router-dom'

import styles from './layout.module.scss'
import Navigatin from './Navigation'

export default function Registration() {
  return (
    <div className={styles.layout}>
      <Navigatin />
      <Outlet />
    </div>
  )
}
