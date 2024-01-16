// components/SearchForm.js

import { useState, useEffect } from "react";
import useSWR from "swr";
import AppLayout from "../component/Layout/Layout";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const searchEndpoint = `${apiUrl}/api/search?query=${query}`;

  // Fetch data using SWR
  const { data, error } = useSWR(searchEndpoint, async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });

  useEffect(() => {}, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>

      {error && <div>Error loading search results</div>}
      {data && (
        <div>
          <h2>Search Results</h2>
          {data.posts.length > 0 ? (
            <div>
              {data.posts.map((post) => (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  {/* Render other post details as needed */}
                </div>
              ))}
            </div>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};
SearchForm.layout = AppLayout;
export default SearchForm;
