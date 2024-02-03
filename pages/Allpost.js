import React from "react";
import useSWRInfinite from "swr/infinite";
import Fetcher from "./api/Fetcher";
import useSWR from "swr";
import Link from "next/link";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";

function Allpost() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data, error } = useSWR(`${baseuri}/api/paginated-posts`, Fetcher);
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
         
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta property="og:locale" content="en_US"/>
        <meta charset="UTF-8"/>
        <title>All Blog - Bits Of Dev</title>
        <meta property="og:title" content='All Blog - Bits Of Dev' />
        <meta name="description" content='Learn more about Bit Of Dev. Its purpose, author, topics and more.'/>
        <meta name="og:description" content={'Learn more about Bit Of Dev. Its purpose, author, topics and more.'}/>
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://bitsofdev.com/about`}/>
        <meta property="og:site_name" content="Bit Of Dev"/>
        <meta property="article:tag" content="Tech Blogs"></meta>
        <meta property="article:tag" content="Technology Updates"></meta>
        <meta property="article:section" content="Resources"/>
        <meta property="og:image:secure_url" content='/assets/imgs/meta/home.jpg'></meta>
        <meta property="og:image:type" content="image/jpeg"></meta>
        <meta property="og:image:alt" content='All Blog - Bits Of Dev'></meta>
        <meta
          property="og:image"
          content={'/assets/imgs/meta/home.jpg'}
        />
        <link rel="canonical" href={'https://bitsofdev.com/about'} />
        <meta
          property="image"
          content={'/assets/imgs/meta/home.jpg'}
        />
        <meta name="keywords" content='tech blog news lover best tech blog '></meta>
        <link rel="icon" type="image" href="/favicon.svg"></link>
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
                <div class="mt-50 mb-50">
                  <div class="row mt-50 mb-10">
                    {data.map((post) => (
                      <div class="col-lg-4" key={post.id}>
                        <div class="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                          <div class="card-image mb-20">
                            <Link href={`post/${post.slug}`}>
                              <a>
                                <img
                                  src={
                                    `${baseuri}/` + "image/post/" + post.image
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
                                      {post.user ? post.user.name : "Unknown"}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
Allpost.layout = AppLayout;

export default Allpost;
