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
        <meta charset="UTF-8" />
        <title>All Blogs - Bits Of Dev</title>

        {/* <!-- Open Graph meta tags --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="All Blogs - Bits Of Dev" />
        <meta name="title" content="All Blogs - Bits Of Dev" />
        <meta name="og:description" content="Learn more All Blogs Bit Of Dev. Its purpose, author, topics and more." />
        <meta property="og:description" content="Learn more All Blogs Bit Of Dev. Its purpose, author, topics and more." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://bitsofdev.com/Allpost" />
        <meta property="og:site_name" content="Bits Of Dev" />
        <meta property="article:tag" content="technology news" />
        <meta property="article:section" content="Resources" />
        <meta property="og:image" content="/assets/imgs/meta-img/all-blogs-bit-of-dev.jpg" />
        <meta property="image" content="/assets/imgs/meta-img/all-blogs-bit-of-dev.jpg" />
        <meta property="og:image:secure_url" content="/assets/imgs/meta-img/all-blogs-bit-of-dev.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="All Blogs - Bits Of Dev" />

        {/* <!-- Canonical URL --> */}
        <link rel="canonical" href="https://bitsofdev.com/Allpost" />

        {/* <!-- Keywords --> */}
        <meta name="keywords" content="technology news, software development, programming tutorials, coding tips, web development, mobile app development, cybersecurity, artificial intelligence, machine learning, data science, cloud computing, tech reviews, gadget reviews, internet of things (IoT), tech trends, digital marketing strategies, SEO best practices, social media marketing, tech innovation, startup tips, tech events, coding languages (e.g., JavaScript, Python, Java), software architecture, tech careers, tech industry updates" />

        {/* <!-- Favicon --> */}
        <link rel="icon" type="image" href="/favicon.png" />
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
                      Explore a comprehensive collection of articles covering diverse topics, ranging from technology and science to lifestyle and entertainment. Stay informed and entertained with a curated selection of engaging content, all conveniently accessible in one place. Dive into a world of knowledge and discovery with All Articles Show.
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
                <div className="mt-50 mb-50">
                  <div className="row mt-50 mb-10">
                    {data.map((post) => (
                      <div className="col-lg-4" key={post.id}>
                        <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                          <div className="card-image mb-20">
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
                                      {post.user ? post.user.name : "Unknown"}
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
