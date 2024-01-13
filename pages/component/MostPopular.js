import React from "react";
import useSWR from "swr";
import Fetcher from "../api/Fetcher";
function MostPopular() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data, error } = useSWR(`${baseuri}/api/mostpopularpost`, Fetcher);
  if (error) {
    return <h1>failed to load</h1>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <div className="row mt-70">
        {data.map((popular) => (
          <div
            key={popular.id}
            className="col-lg-6 wow animate__animated animate__fadeIn"
            data-wow-delay="0"
          >
            <div className="card-blog-1 hover-up">
              <div className="card-image mb-20">
                <a className="post-type" href="blog-archive.html"></a>
                <a href="single-sidebar.html">
                  <img
                    src={`${baseuri}/` + "image/post/" + popular.image}
                    alt={popular.title}
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
                      #Travel
                    </a>
                  </div>
                  <div className="col-5 text-end">
                    <span className="color-gray-700 text-sm timeread">
                      3 mins read
                    </span>
                  </div>
                </div> */}
                <a href="single-sidebar.html">
                  <h4 className="color-white mt-20">
                    {" "}
                    {popular.title.length > 70
                      ? `${popular.title.slice(0, 70)}...`
                      : popular.title}
                  </h4>
                </a>
                <div className="row align-items-center mt-25">
                  <div className="col-7">
                    <div className="box-author">
                      <img
                        src={
                          `${baseuri}/` +
                          "storage/profile/" +
                          popular.user.image
                        }
                        alt={popular.title}
                      />
                      <div className="author-info">
                        <h6 className="color-gray-700">
                          {popular.user ? popular.user.name : "Unknown"}
                        </h6>
                        <span className="color-gray-700 text-sm">
                          {new Date(popular.created_at).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
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
  );
}

export default MostPopular;
