import { useEffect, useState } from "react";
import useSWR from "swr";
import Fetcher from "../api/Fetcher";
import Link from "next/link";
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

  // if (!popularCategories) {
  //   return <div>Loading...</div>;
  // }
  if (!popularCategories) {
    return (
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="text-center">
            <img
              className="mb-10"
              src="assets/imgs/template/favicon.svg"
              alt="GenZ"
            />
            <div className="preloader-dots"></div>
          </div>
        </div>
      </div>
    );
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
                    <Link href={`/category/${category.slug}`}>
                      <a>
                        <img
                          src={`${baseuri}/` + "image/" + category.image}
                          alt={category.name}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="info-cat">
                    <Link href={`/category/${category.slug}`}>
                      <a className="color-gray-500 text-xl">{category.name}</a>
                    </Link>
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
