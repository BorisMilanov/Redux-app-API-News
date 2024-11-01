import React, { useState, ChangeEvent } from 'react';
import { useGetArticlesQuery } from './newsApiSlice';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, error, isLoading } = useGetArticlesQuery(searchTerm);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for news articles..."
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching articles.</p>}
      {data && (
        <ul>
          {data.articles
            .filter((article) => article.title !== "[Removed]")
            .map((article) => (
              <li key={article.url}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;