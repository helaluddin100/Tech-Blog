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
      <main class="main">
        <div class="cover-home3">
          <div class="container">
            <div class="row">
              <div class="col-xl-1"></div>
              <div class="col-xl-10 col-lg-12">
                <div class="row align-items-end mt-50">
                  <div class="col-lg-7 mb-20">
                    <div class="d-inline-block position-relative">
                      <h1 class="color-white mb-20 color-linear wow animate__animated animate__fadeIn">
                        All Articles Show
                      </h1>
                    </div>
                    <p class="color-gray-500 text-base wow animate__animated animate__fadeIn">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla convallis nisi sed turpis vulputate viverra. Morbi
                      ligula elit, hendrerit non nisl tincidunt, sodales
                      consequat magna.
                    </p>
                  </div>
                  <div class="col-lg-5 mb-20 text-start text-lg-end">
                    <div class="box-breadcrumbs wow animate__animated animate__fadeIn">
                      <ul class="breadcrumb">
                        <li>
                          <Link href={"/"}>
                            <a class="home">Home</a>
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
                  <div class="col-lg-12">
                    <div class="border-bottom border-gray-800 mt-10 mb-30"></div>
                  </div>
                </div>
                {data && (
                  <div class="mt-50 mb-50">
                    {data.posts.length > 0 ? (
                      <div class="row mt-50 mb-10">
                        {data.posts.map((post) => (
                          <div class="col-lg-4" key={post.id}>
                            <div class="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                              <div class="card-image mb-20">
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
                              <div class="card-info">
                                <Link href={`post/${post.slug}`}>
                                  <a>
                                    <h5 class="color-white mt-20">
                                      {post.title.length > 50
                                        ? `${post.title.slice(0, 50)}...`
                                        : post.title}
                                    </h5>
                                  </a>
                                </Link>
                                <div class="row align-items-center mt-25">
                                  <div class="col-7">
                                    <div class="box-author">
                                      <img
                                        src={
                                          `${baseuri}/` +
                                          "storage/profile/" +
                                          post.user.image
                                        }
                                        alt={post.title}
                                      />
                                      <div class="author-info">
                                        <h6 class="color-gray-700">
                                          {post.user
                                            ? post.user.name
                                            : "Unknown"}
                                        </h6>
                                        <span class="color-gray-700 text-sm">
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
                                  <div class="col-5 text-end">
                                    <Link href={`post/${post.slug}`}>
                                      <a class="readmore color-gray-500 text-sm">
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
