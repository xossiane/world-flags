import React, { useState } from 'react';
import styles from './styles.module.scss'; // Import SCSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


interface Props {
  data: string[];
  onSearch: (query: string) => void;
}

const SearchComponent: React.FC<Props> = ({ data, onSearch }) => {
  const [query, setQuery] = useState<string>('');
  const Magnified = <FontAwesomeIcon icon={faSearch} size="3x" style={{marginLeft:"3.2rem"}}/>

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className={styles.SearchComponent}>
      <div className={styles.SearchComponent__magnified}>{Magnified}</div>
      
      <input
      className={styles.SearchComponent__text}
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={handleSearch}
      />
      {/* <ul>
        {data.filter(item => item.includes(query)).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default SearchComponent;