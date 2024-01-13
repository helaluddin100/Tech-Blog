import React from "react";
import useSWR from "swr";
import Fetcher from "../api/Fetcher";
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
        {/* <div className="box-sidebar bg-gray-850 border-gray-800">
          <div className="head-sidebar wow animate__animated animate__fadeIn">
            <h5 className="line-bottom">Last Comment</h5>
          </div>
          <div className="content-sidebar">
            <div className="list-comments">
              <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                <p className="color-gray-500 mb-20">
                  “ Gosh jaguar ostrich quail one excited dear hello and bound
                  and the and bland moral misheard roadrunner “
                </p>
                <div className="box-author-small">
                  <img
                    src="assets/imgs/page/homepage1/author6.png"
                    alt="Genz"
                  />
                  <div className="author-info">
                    <span className="d-block color-gray-700 text-sm">
                      Jane Cooper
                    </span>
                    <span className="color-gray-700 text-xs">
                      15 April 2022
                    </span>
                  </div>
                </div>
              </div>
              <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                <p className="color-gray-500 mb-20">
                  “ Gosh jaguar ostrich quail one excited dear hello and bound
                  and the and bland moral misheard roadrunner “
                </p>
                <div className="box-author-small">
                  <img
                    src="assets/imgs/page/homepage1/author7.png"
                    alt="Genz"
                  />
                  <div className="author-info">
                    <span className="d-block color-gray-700 text-sm">
                      Katen Doe
                    </span>
                    <span className="color-gray-700 text-xs">
                      15 April 2022
                    </span>
                  </div>
                </div>
              </div>
              <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                <p className="color-gray-500 mb-20">
                  “ Gosh jaguar ostrich quail one excited dear hello and bound
                  and the and bland moral misheard roadrunner “
                </p>
                <div className="box-author-small">
                  <img
                    src="assets/imgs/page/homepage1/author8.png"
                    alt="Genz"
                  />
                  <div className="author-info">
                    <span className="d-block color-gray-700 text-sm">
                      Barbara Cartland
                    </span>
                    <span className="color-gray-700 text-xs">
                      15 April 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-sidebar bg-gray-850 border-gray-800">
          <div className="head-sidebar">
            <a href="../../../index.html">
              <img src="assets/imgs/template/logo.svg" alt="Genz" />
            </a>
            <h6 className="color-gray-700">Follow us on instagram</h6>
          </div>
          <div className="content-sidebar">
            <div className="row mt-30 mb-10">
              <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                <a href="#">
                  <img
                    className="bdrd-8"
                    src="assets/imgs/page/homepage1/gallery.png"
                    alt="Genz"
                  />
                </a>
              </div>
              <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                <a href="#">
                  <img
                    className="bdrd-8"
                    src="assets/imgs/page/homepage1/gallery2.png"
                    alt="Genz"
                  />
                </a>
              </div>
              <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                <a href="#">
                  <img
                    className="bdrd-8"
                    src="assets/imgs/page/homepage1/gallery3.png"
                    alt="Genz"
                  />
                </a>
              </div>
              <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                <a href="#">
                  <img
                    className="bdrd-8"
                    src="assets/imgs/page/homepage1/gallery4.png"
                    alt="Genz"
                  />
                </a>
              </div>
              <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                <a href="#">
                  <img
                    className="bdrd-8"
                    src="assets/imgs/page/homepage1/gallery5.png"
                    alt="Genz"
                  />
                </a>
              </div>
              <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                <a href="#">
                  <img
                    className="bdrd-8"
                    src="assets/imgs/page/homepage1/gallery6.png"
                    alt="Genz"
                  />
                </a>
              </div>
              <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                <a href="#">
                  <img
                    className="bdrd-8"
                    src="assets/imgs/page/homepage1/gallery7.png"
                    alt="Genz"
                  />
                </a>
              </div>
              <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                <a href="#">
                  <img
                    className="bdrd-8"
                    src="assets/imgs/page/homepage1/gallery8.png"
                    alt="Genz"
                  />
                </a>
              </div>
              <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                <a href="#">
                  <img
                    className="bdrd-8"
                    src="assets/imgs/page/homepage1/gallery9.png"
                    alt="Genz"
                  />
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default PopularPost;
