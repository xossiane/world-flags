"use client"

import { useState } from "react";
import styles from "./page.module.scss";

import NavBar from "./pages/organisms/NavBar";
import SearchComponent from "./pages/organisms/Search";



export default function Home() {
  const [searchResults, setSearchResults] = useState<String[]>([]);
  const handleSearch = (query: string) => {
    // Perform search logic here (e.g., fetch data from an API)
    // For simplicity, just filtering an array of strings
    setSearchResults(data.filter(item => item.includes(query)));
  };
  
  const data = ["apple", "banana", "orange", "pear", "grape"];
  return (
    <main className={styles.main}>
      <NavBar></NavBar> 
      <div className={styles.description}>
      <SearchComponent data={data} onSearch={handleSearch} />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
        
      </div>
    </main>
  );
}
