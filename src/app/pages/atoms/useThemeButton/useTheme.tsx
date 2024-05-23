import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


import styles from "./useThemeButton.module.scss";

import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import type { Mode } from '@anatoliygatt/dark-mode-toggle';

export const ThemeChanger = () => {
   
    const [mode, setMode] = useState<Mode>('dark');
    const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  
  // this line is the key to avoid the error.
  if (!hasMounted) return null;
  

  return (
    <div> 
      <DarkModeToggle
      mode={theme}
      dark="Dark"
      light="Light"
      size="md"
      inactiveTrackColor="#e2e8f0"
      inactiveTrackColorOnHover="#f8fafc"
      inactiveTrackColorOnActive="#cbd5e1"
      activeTrackColor="#334155"
      activeTrackColorOnHover="#1e293b"
      activeTrackColorOnActive="#0f172a"
      inactiveThumbColor="#1e293b"
      activeThumbColor="#e2e8f0"
      onChange={(mode) => {
        
        setTheme(mode);
      }}
    />
     
      </div>
   
  )
}