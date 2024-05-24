import React, { useState } from 'react';
import styles from './styles.module.scss'; // Import SCSS file


interface Props {
  data: string[];
  onSearch: (query: string) => void;
}

const SearchComponent: React.FC<Props> = ({ data, onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className={styles.SearchComponent}>
      <input
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