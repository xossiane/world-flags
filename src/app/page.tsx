"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import { ThemeChanger } from "./pages/atoms/useThemeButton/useTheme";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ThemeChanger/>
        <p> hey wait im building</p>
        
      </div>
    </main>
  );
}
