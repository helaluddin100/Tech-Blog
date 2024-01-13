import React from "react";
import useSWR from "swr";
import Fetcher from "../api/Fetcher";
import PopularPost from "./PopularPost";
function RecentPosts() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data, error } = useSWR(`${baseuri}/api/latestpost`, Fetcher);
  if (error) {
    return <h1>failed to load</h1>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div className="row mt-70">
        <div className="col-lg-12 mb-50">
          <h2 className="color-linear d-inline-block mb-10">Recent posts</h2>
          <p className="text-lg color-gray-500">Don't miss the latest trends</p>
        </div>
        <div className="col-lg-8">
          <div className="box-list-posts">
            <div className="row">
              {data.map((latestpost) => (
                <div className="col-lg-6" key={latestpost.id}>
                  <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                    <div className="card-image mb-20">
                      <a className="post-type" href="#"></a>
                      <a href="single-sidebar.html">
                        <img
                          src={`${baseuri}/` + "image/post/" + latestpost.image}
                          alt={latestpost.title}
                        />
                      </a>
                    </div>
                    <div className="card-info">
                      {/* <div className="row">
                        <div className="col-7">
                          <a
                            className="color-gray-700 text-sm"
                            href="blog-archive.html"
                          >
                            # Travel
                          </a>
                        </div>
                        <div className="col-5 text-end">
                          <span className="color-gray-700 text-sm timeread">
                            3 mins read
                          </span>
                        </div>
                      </div> */}
                      <a href="single-sidebar.html">
                        <h5 className="color-gray-50 mt-20">
                          {latestpost.title.length > 50
                            ? `${latestpost.title.slice(0, 50)}...`
                            : latestpost.title}
                        </h5>
                      </a>
                      <div className="row align-items-center mt-25">
                        <div className="col-7">
                          <div className="box-author">
                            <img
                              src={
                                `${baseuri}/` +
                                "storage/profile/" +
                                latestpost.user.image
                              }
                              alt={latestpost.title}
                            />
                            <div className="author-info">
                              <h6 className="color-gray-700">
                                {latestpost.user
                                  ? latestpost.user.name
                                  : "Unknown"}
                              </h6>
                              <span className="color-gray-700 text-sm">
                                {new Date(
                                  latestpost.created_at
                                ).toLocaleDateString("en-US", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-5 text-end">
                          <a
                            className="readmore color-gray-500 text-sm"
                            href="single-sidebar.html"
                          >
                            <span>Read more</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn">
                Show More Posts
                <i className="fi-rr-arrow-small-right"></i>
              </a>
            </div>
          </div>
        </div>
        <PopularPost />
      </div>
    </div>
  );
}

export default RecentPosts;
