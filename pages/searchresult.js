// pages/search.js

import { useRouter } from "next/router";
import useSWR from "swr";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Link from "next/link";

const SearchResultsPage = () => {
  const router = useRouter();
  const { query } = router.query;

  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;
  const searchEndpoint = `${baseuri}/api/search?query=${query}`;
  const { data, error } = useSWR(searchEndpoint, async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });

  return (
    <div>
      <Head>
        <title>NFT Website Development Services |nft constructer</title>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <main className="main">
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-1"></div>
              <div className="col-xl-10 col-lg-12">
                <div className="row align-items-end mt-50">
                  <div className="col-lg-7 mb-20">
                    <div className="d-inline-block position-relative">
                      <h1 className="color-white mb-20 color-linear wow animate__animated animate__fadeIn">
                        All Articles Show
                      </h1>
                    </div>
                    <p className="color-gray-500 text-base wow animate__animated animate__fadeIn">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla convallis nisi sed turpis vulputate viverra. Morbi
                      ligula elit, hendrerit non nisl tincidunt, sodales
                      consequat magna.
                    </p>
                  </div>
                  <div className="col-lg-5 mb-20 text-start text-lg-end">
                    <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                      <ul className="breadcrumb">
                        <li>
                          <Link href={"/"}>
                            <a className="home">Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={""}>
                            <a>All Posts</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="border-bottom border-gray-800 mt-10 mb-30"></div>
                  </div>
                </div>
                {data && (
                  <div className="mt-50 mb-50">
                    {data.posts.length > 0 ? (
                      <div className="row mt-50 mb-10">
                        {data.posts.map((post) => (
                          <div className="col-lg-4" key={post.id}>
                            <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                              <div className="card-image mb-20">
                                <Link href={`post/${post.slug}`}>
                                  <a>
                                    <img
                                      src={
                                        `${baseuri}/` +
                                        "image/post/" +
                                        post.image
                                      }
                                      alt={post.title}
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="card-info">
                                <Link href={`post/${post.slug}`}>
                                  <a>
                                    <h5 className="color-white mt-20">
                                      {post.title.length > 50
                                        ? `${post.title.slice(0, 50)}...`
                                        : post.title}
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
                                          post.user.image
                                        }
                                        alt={post.title}
                                      />
                                      <div className="author-info">
                                        <h6 className="color-gray-700">
                                          {post.user
                                            ? post.user.name
                                            : "Unknown"}
                                        </h6>
                                        <span className="color-gray-700 text-sm">
                                          {new Date(
                                            post.created_at
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
                                    <Link href={`post/${post.slug}`}>
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
                    ) : (
                      <p>No results found.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

SearchResultsPage.layout = AppLayout;
export default SearchResultsPage;
