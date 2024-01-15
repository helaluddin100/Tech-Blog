import React from "react";
import useSWR from "swr";
import Fetcher from "../api/Fetcher";
import PopularCategories from "./PopularCategory";
import PopularTags from "./PopularTags";
function PopularPost() {
  //Popular post
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, error } = useSWR(`${baseuri}/api/popularpost`, Fetcher);
  if (error) {
    return <h1>failed to load</h1>;
  }
  if (!data) {
    return <div>loading...</div>;
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
                    <a href="single-sidebar.html">
                      <img
                        src={`${baseuri}/` + "image/post/" + popularpost.image}
                        alt={popularpost.title}
                      />
                    </a>
                  </div>
                  <div className="info-post border-gray-800">
                    <a href="single-sidebar.html">
                      <h6 className="color-white">
                        {popularpost.title.length > 40
                          ? `${popularpost.title.slice(0, 40)}...`
                          : popularpost.title}
                      </h6>
                    </a>
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
