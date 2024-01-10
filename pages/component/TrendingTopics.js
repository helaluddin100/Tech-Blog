import React from "react";

function TrendingTopics() {
  return (
    <div>
      <div className="text-center mt-70">
        <h2 className="color-linear mb-10">Trending Topics</h2>
        <p className="text-lg color-gray-500">
          Discover the most outstanding articles in all topics
        </p>
      </div>
      <div className="mb-70 mt-70">
        <div className="box-topics box-topics-2 border-gray-800 bg-gray-850">
          <div className="row">
            <div className="col-lg-12">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-6">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="card-style-1">
                        <a href="blog-archive.html">
                          <div className="card-image">
                            <img
                              src="assets/imgs/page/homepage1/sport.png"
                              alt="Genz"
                            />
                            <div className="card-info">
                              <div className="info-bottom">
                                <h6 className="color-white mb-5">Sport</h6>
                                <p className="text-xs color-gray-500">
                                  38 Articles
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card-style-1">
                        <a href="blog-archive.html">
                          <div className="card-image">
                            <img
                              src="assets/imgs/page/homepage1/travel.png"
                              alt="Genz"
                            />
                            <div className="card-info">
                              <div className="info-bottom">
                                <h6 className="color-white mb-5">Travel</h6>
                                <p className="text-xs color-gray-500">
                                  63 Articles
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card-style-1">
                        <a href="blog-archive.html">
                          <div className="card-image">
                            <img
                              src="assets/imgs/page/homepage1/design.png"
                              alt="Genz"
                            />
                            <div className="card-info">
                              <div className="info-bottom">
                                <h6 className="color-white mb-5">Design</h6>
                                <p className="text-xs color-gray-500">
                                  78 Articles
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card-style-1">
                        <a href="blog-archive.html">
                          <div className="card-image">
                            <img
                              src="assets/imgs/page/homepage1/movie.png"
                              alt="Genz"
                            />
                            <div className="card-info">
                              <div className="info-bottom">
                                <h6 className="color-white mb-5">Movie</h6>
                                <p className="text-xs color-gray-500">
                                  125 Articles
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card-style-1">
                        <a href="blog-archive.html">
                          <div className="card-image">
                            <img
                              src="assets/imgs/page/homepage1/lifestyle.png"
                              alt="Genz"
                            />
                            <div className="card-info">
                              <div className="info-bottom">
                                <h6 className="color-white mb-5">Lifestyle</h6>
                                <p className="text-xs color-gray-500">
                                  78 Articles
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card-style-1">
                        <a href="blog-archive.html">
                          <div className="card-image">
                            <img
                              src="assets/imgs/page/homepage2/lifestyle.png"
                              alt="Genz"
                            />
                            <div className="card-info">
                              <div className="info-bottom">
                                <h6 className="color-white mb-5">Lifestyle</h6>
                                <p className="text-xs color-gray-500">
                                  78 Articles
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-prev swiper-button-prev-style-2"></div>
                <div className="swiper-button-next swiper-button-next-style-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingTopics;
