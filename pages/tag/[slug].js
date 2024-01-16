import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import Link from "next/link";
import AppLayout from "../../component/Layout/Layout";
import Fetcher from "../api/Fetcher";

const PostsByTagPage = () => {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();
  const { slug } = router.query;
  const { data, error } = useSWR(
    `${baseuri}/api/posts-by-tag/${slug}`,
    Fetcher
  );
  console.log(data);
  if (error) return <div>Error loading posts</div>;
  if (!data) {
    return (
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="text-center">
            <img
              className="mb-10"
              src="assets/imgs/template/favicon.svg"
              alt="GenZ"
            />
            <div className="preloader-dots"></div>
          </div>
        </div>
      </div>
    );
  }
  const { tag, posts } = data;
  return (
    <div>
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
                        {tag.name}
                      </h1>
                    </div>
                    <p class="color-gray-500 text-base wow animate__animated animate__fadeIn">
                      {tag.description || "No description"}
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
                          <Link href={"/Allpost"}>
                            <a>Blog</a>
                          </Link>
                        </li>
                        <li>
                          <span> {slug}</span>
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
                    {posts.map((post) => (
                      <div class="col-lg-4" key={post.id}>
                        <div class="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                          <div class="card-image mb-20">
                            <Link href={`/post/${post.slug}`}>
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
                            <Link href={`/post/${post.slug}`}>
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
                                <Link href={`/post/${post.slug}`}>
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
};

PostsByTagPage.layout = AppLayout;
export default PostsByTagPage;
