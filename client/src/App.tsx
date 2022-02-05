import React from 'react'
import styles from './style.module.scss'

export default function App() {
  return (
    <>
      <h1 className={styles.header}>
        Hello Vape!!!!!!!!
        {process.env.NODE_ENV}
      </h1>
    </>
  )
}
