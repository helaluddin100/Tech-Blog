import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import PopularPost from "./component/PopularPost";
import Link from "next/link";
const SinglePost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [postData, setPostData] = useState(null);
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(`${baseuri}/api/posts/${slug}`);
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    if (slug) {
      fetchPostData();
    }
  }, [slug]);

  if (!postData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta property="og:title" content={postData.seo_title} />
        <meta name="description" content={postData.seo_description}></meta>
        <meta name="og:description" content={postData.seo_description}></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={`${baseuri}/` + "image/post/" + postData.image}
        />
        <link rel="canonical" href={postData.top_description} />
        <meta
          property="image"
          content={`${baseuri}/` + "image/post/" + postData.image}
        />
        <meta name="keywords" content={postData.fc_keyword}></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <main class="main">
        <div class="cover-home3">
          <div class="container">
            <div class="row">
              <div class="col-xl-1"></div>
              <div class="col-xl-10 col-lg-12">
                <div class="pt-30 border-bottom border-gray-800 pb-20">
                  <div class="box-breadcrumbs">
                    <ul class="breadcrumb">
                      <li>
                        <Link href={"/"}>
                          <a class="home">Home</a>
                        </Link>
                      </li>
                      <li>
                        <a href="blog-archive.html">Blog</a>
                      </li>
                      <li>
                        <span>{postData.title}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row mt-50 align-items-end">
                  <div class="col-lg-9 col-md-8">
                    <h2 class="color-linear mb-30">{postData.title}</h2>
                    <div class="box-author mb-20">
                      <img
                        src={
                          `${baseuri}/` +
                          "storage/profile/" +
                          postData.user.image
                        }
                        alt={postData.title}
                      />
                      <div class="author-info">
                        <h6 class="color-gray-700">
                          {postData.user ? postData.user.name : "Unknown"}
                        </h6>
                        <span class="color-gray-700 text-sm mr-30">
                          {new Date(postData.created_at).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>
                        {/* <span class="color-gray-700 text-sm">3 mins to read</span> */}
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4">
                    <div class="box-share border-gray-800">
                      <h6 class="d-inline-block color-gray-500 mr-10">Share</h6>
                      <a class="icon-media icon-fb" href="#"></a>
                      <a class="icon-media icon-tw" href="#"></a>
                      <a class="icon-media icon-printest" href="#"></a>
                    </div>
                  </div>
                </div>
                <div class="row mt-50">
                  <div class="col-lg-8">
                    <div class="content-detail border-gray-800">
                      <div class="mt-20 mb-20">
                        <img
                          class="img-bdrd-16"
                          src={`${baseuri}/` + "image/post/" + postData.image}
                          alt={postData.title}
                        />
                      </div>

                      <div
                        className=""
                        dangerouslySetInnerHTML={{
                          __html: postData.body,
                        }}
                      ></div>
                    </div>

                    {postData.tags && (
                      <div class="box-tags">
                        {postData.tags.map((tag) => (
                          <a
                            key={tag.id}
                            class="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up"
                            href="blog-archive.html"
                          >
                            #{tag.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <PopularPost />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
SinglePost.layout = AppLayout;
export default SinglePost;