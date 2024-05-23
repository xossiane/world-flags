"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import { ThemeChanger } from "./pages/atoms/useThemeButton/useTheme";
import NavBar from "./pages/organisms/NavBar";



export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar></NavBar> 
      <div className={styles.description}>
      
        
      </div>
    </main>
  );
}
