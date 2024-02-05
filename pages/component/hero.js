import React from "react";
import useSWR from "swr";
import Fetcher from "../api/Fetcher";
import Link from "next/link";
function hero() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data, error } = useSWR(`${baseuri}/api/allcategory`, Fetcher);
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
      {/* Your existing code */}
      <div className="banner banner-home2">
        <div className="text-center">
          <h1 className="color-white">
            Tomorrow's <span className="color-linear"> Tech</span>, Today's
            Insights: Uncover the <span className="color-linear">Trends</span>
          </h1>
        </div>
        <div className="text-center mt-50">
          <ul className="list-tags-col-5 mb-50 text-center">
            {data.map((category) => (
              <li key={category.id}>
                <div
                  className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                  data-wow-delay="0s"
                >
                  <div className="card-info">
                    <Link href={`/category/${category.slug}`}>
                      <a className="color-gray-500">{category.name}</a>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default hero;
