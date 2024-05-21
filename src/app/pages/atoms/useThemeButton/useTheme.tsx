import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import styles from "./useThemeButton.module.scss";

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()
    const Sun = <FontAwesomeIcon icon={faSun} />
    const Moon = <FontAwesomeIcon icon={faMoon} />
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  
  // this line is the key to avoid the error.
  if (!hasMounted) return null;
  

  return (
    <div>
      The current theme is: {theme}
      <div className={styles.ThemeButton_container}>
      <button onClick={() => setTheme('light')} className={styles.ThemeButton_container__light}>{Sun}</button>
      <button onClick={() => setTheme('dark')} className={styles.ThemeButton_container__dark}>{Moon}</button>
      </div>
    </div>
  )
}