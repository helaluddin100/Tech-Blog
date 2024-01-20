import React from "react";
import useSWR from "swr";
import Fetcher from "../api/Fetcher";
import PopularPost from "./PopularPost";
import Link from "next/link";
function RecentPosts() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data, error } = useSWR(`${baseuri}/api/latestpost`, Fetcher);
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
                      <Link href={`post/${latestpost.slug}`}>
                        <a>
                          <img
                            src={
                              `${baseuri}/` + "image/post/" + latestpost.image
                            }
                            alt={latestpost.title}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="card-info">
                      <Link href={`post/${latestpost.slug}`}>
                        <a>
                          <h5 className="color-gray-50 mt-20">
                            {latestpost.title.length > 50
                              ? `${latestpost.title.slice(0, 50)}...`
                              : latestpost.title}
                          </h5>
                        </a>
                      </Link>
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
                          <Link href={`post/${latestpost.slug}`}>
                            <a className="readmore color-gray-500 text-sm">
                              <span>Read more</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href={"Allpost"}>
                <a className="btn btn-linear btn-load-more ">
                  Show More Posts
                  <i className="fi-rr-arrow-small-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <PopularPost />
      </div>
    </div>
  );
}

export default RecentPosts;
