import React, { useState } from 'react'
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from 'next/link';
const fetcher = (url) => fetch(url).then((res) => res.json());
const SearchPopularTags = () => {
    const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;
      // =============toggle search box =============================
  const [formSearchVisible, setFormSearchVisible] = useState(false);

  const toggleFormSearch = () => {
    setFormSearchVisible(!formSearchVisible);
  };
  // =========search function ===========
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    setFormSearchVisible(!formSearchVisible);
    e.preventDefault();
    router.push(`/searchresult?query=${encodeURIComponent(query)}`);
    setQuery("");
  };


  // ============popular tag ===========
  const { data: popularTags, error } = useSWR(
    `${baseuri}/api/popular-tags`,
    fetcher
  );

  if (error) {
    return <h1>Failed to load</h1>;
  }

  if (!popularTags) {
    return (
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="text-center">
            <img
              className="mb-10"
              src="/assets/imgs/template/favicon.svg"
              alt="Bits Of Dev"
            />
            <div className="preloader-dots"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
       <div className="header-right text-end">
              <a
                className="btn btn-search"
                href="#"
                onClick={toggleFormSearch}
              ></a>
              <div
                className="form-search p-20"
                style={{ display: formSearchVisible ? "block" : "none" }}
              >
                <form onSubmit={handleSearch}>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <input className="btn-search-2" type="submit" value="" />
                </form>
                <div className="popular-keywords text-start mt-20">
                  <p className="mb-10 color-white">Popular tags:</p>
                  {popularTags.map((tag) => (
                    <Link key={tag.slug} href={`/tag/${tag.slug}`}>
                      <a className="color-gray-600 mr-10 font-xs">
                        #{tag.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div></>
  )
}

export default SearchPopularTags