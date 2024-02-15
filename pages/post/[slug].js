import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppLayout from "../../component/Layout/Layout";
import Head from "next/head";
import PopularPost from "../component/PopularPost";
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

        console.log("data", data)
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    if (slug) {
      fetchPostData();
    }
  }, [slug]);

  if (!postData) {
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
  console.log('image', postData.image)
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta property="og:locale" content="en_US" />
        <meta charset="UTF-8" />
        <title>{postData.title}</title>
        <meta property="og:title" content={postData.title} />
        <meta name="description" content={postData.seo_description} />
        <meta name="og:description" content={postData.seo_description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://admin.bitsofdev.com/post/${postData.slug}`} />
        <meta property="og:site_name" content="Bit Of Dev" />
        <meta property="article:tag" content="Tech Blogs" />
        <meta property="article:tag" content="Technology Updates" />
        <meta property="article:section" content="Resources" />
        <meta property="og:updated_time" content={postData.updated_at} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="533" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="article:published_time" content={postData.created_at} />
        <meta property="article:modified_time" content={postData.updated_at} />
        <meta property="og:image:alt" content={postData.seo_title} />
        <meta property="og:image" content={`https://admin.bitsofdev.com/image/post/${postData.image}`} />
        <link rel="canonical" href={`https://admin.bitsofdev.com/post/${postData.slug}`} />
        <meta name="keywords" content={postData.fc_keyword} />
        <link rel="icon" type="image" href="/favicon.png" />
      </Head>


      <main className="main">
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-1"></div>
              <div className="col-xl-10 col-lg-12">
                <div className="pt-30 border-bottom border-gray-800 pb-20">
                  <div className="box-breadcrumbs">
                    <ul className="breadcrumb">
                      <li>
                        <Link href={"/"}>
                          <a className="home">Home</a>
                        </Link>
                      </li>
                      <li>
                        <a href="/Allpost">Blog</a>
                      </li>
                      <li>
                        <span>{postData.title}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mt-50 align-items-end">
                  <div className="col-lg-9 col-md-8">
                    <h2 className="color-linear mb-30">{postData.title}</h2>
                    <div className="box-author mb-20">
                      <img
                        src={
                          `${baseuri}/` +
                          "storage/profile/" +
                          postData.user.image
                        }
                        alt={postData.title}
                      />
                      <div className="author-info">
                        <h6 className="color-gray-700">
                          {postData.user ? postData.user.name : "Unknown"}
                        </h6>
                        <span className="color-gray-700 text-sm mr-30">
                          {new Date(postData.created_at).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>
                        <span className="color-gray-700 text-sm">
                          {postData.view_count} Views this post
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="box-share border-gray-800">
                      <h6 className="d-inline-block color-gray-500 mr-10">Share</h6>
                      <a className="icon-media icon-fb" href="#"></a>
                      <a className="icon-media icon-tw" href="#"></a>
                      <a className="icon-media icon-printest" href="#"></a>
                    </div>
                  </div>
                </div>
                <div className="row mt-50">
                  <div className="col-lg-8">
                    <div className="content-detail border-gray-800">
                      <div className="mt-20 mb-20">
                        <img
                          className="img-bdrd-16"
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
                      <div className="box-tags">
                        {postData.tags.map((tag) => (
                          <Link href={`/tag/${tag.slug}`}>
                            <a
                              key={tag.id}
                              className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up"
                            >
                              #{tag.name}
                            </a>
                          </Link>
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
