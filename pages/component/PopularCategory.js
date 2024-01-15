import { useEffect, useState } from "react";
import useSWR from "swr";
import Fetcher from "../api/Fetcher";
const PopularCategories = () => {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  // const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: popularCategories, error } = useSWR(
    `${baseuri}/api/popular-categories`,
    Fetcher
  );

  if (error) {
    return <h1>Failed to load</h1>;
  }

  if (!popularCategories) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="box-sidebar bg-gray-850 border-gray-800">
        <div className="head-sidebar">
          <h5 className="line-bottom">Categories</h5>
        </div>
        <div className="content-sidebar">
          {popularCategories.map((category) => (
            <div className="list-cats" key={category.id}>
              <div className="item-cats border-gray-800 ">
                <div className="cat-left">
                  <div className="image-cat">
                    <a href="blog-archive.html">
                      <img
                        src={`${baseuri}/` + "image/" + category.image}
                        alt={category.name}
                      />
                    </a>
                  </div>
                  <div className="info-cat">
                    <a
                      className="color-gray-500 text-xl"
                      href="blog-archive.html"
                    >
                      {category.name}
                    </a>
                  </div>
                </div>
                <div className="cat-right">
                  <a className="btn btn-small text-sm color-gray-500 bg-gray-800">
                    {category.posts_count} posts
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
