import React from 'react'
import { ThemeChanger } from '../../atoms/useThemeButton/useTheme'
import styles from "./styles.module.scss"

function NavBar() {
  return (
    <section className={styles.NavBar}>
        <h1 className={styles.NavBar__text} >Where in the world?</h1>
        <div className={styles.NavBar__toggle}> <ThemeChanger/></div>
       
    </section>
  )
}

export default NavBar
