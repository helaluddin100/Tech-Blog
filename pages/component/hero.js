import React from "react";
import useSWR from "swr";
import Fetcher from "../api/Fetcher";
import Link from "next/link";
function hero() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;
  console.log("baseuri:", baseuri);
  const { data, error } = useSWR(`${baseuri}/api/allcategory`, Fetcher);
  if (error) {
    return <h1>failed to load</h1>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {/* Your existing code */}
      <div className="banner banner-home2">
        <div class="text-center">
          <h6 class="color-gray-600">Welcome to our blog</h6>
          <h1 class="color-white">
            Being<span class="color-linear"> Unique</span> is better
            <br class="d-none d-lg-block" />
            than being
            <span class="color-linear">Erfect</span>
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
                  <div className="card-image">
                    <Link href={`/category/${category.slug}`}>
                      <a>
                        <img
                          src={`${baseuri}/` + "image/" + category.image}
                          alt={category.name}
                        />
                      </a>
                    </Link>
                  </div>
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
