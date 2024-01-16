import React from "react";
import useSWR from "swr";
import Fetcher from "../api/Fetcher";
import PopularCategories from "./PopularCategory";
import PopularTags from "./PopularTags";
import Link from "next/link";
function PopularPost() {
  //Popular post
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, error } = useSWR(`${baseuri}/api/popularpost`, Fetcher);
  if (error) {
    return <h1>failed to load</h1>;
  }
  if (!data) {
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
    <div className="col-lg-4">
      <div className="sidebar">
        <PopularCategories />
        <div className="box-sidebar bg-gray-850 border-gray-800">
          <div className="head-sidebar wow animate__animated animate__fadeIn">
            <h5 className="line-bottom">Popular Posts</h5>
          </div>
          <div className="content-sidebar">
            <div className="list-posts">
              {data.map((popularpost) => (
                <div
                  className="item-post wow animate__animated animate__fadeIn"
                  key={popularpost.id}
                >
                  <div className="image-post">
                    <Link href={`post/${popularpost.slug}`}>
                      <a>
                        <img
                          src={
                            `${baseuri}/` + "image/post/" + popularpost.image
                          }
                          alt={popularpost.title}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="info-post border-gray-800">
                    <Link href={`post/${popularpost.slug}`}>
                      <a>
                        <h6 className="color-white">
                          {popularpost.title.length > 40
                            ? `${popularpost.title.slice(0, 40)}...`
                            : popularpost.title}
                        </h6>
                      </a>
                    </Link>
                    {/* <span className="color-gray-700">15 mins read</span> */}
                    <ul className="d-inline-block">
                      <li className="color-gray-700">
                        {new Date(popularpost.created_at).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <PopularTags />
      </div>
    </div>
  );
}

export default PopularPost;
