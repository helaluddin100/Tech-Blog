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

        console.log("data",data)
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

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta property="og:locale" content="en_US"/>
        <meta charset="UTF-8"/>
        <title>{postData.title}</title>
        <meta property="og:title" content={postData.seo_title} />
        <meta name="description" content={postData.seo_description}/>
        <meta name="og:description" content={postData.seo_description}/>
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://bitsofdev/${postData.slug}`}/>
        <meta property="og:site_name" content="Bit Of Dev"/>
        <meta property="article:tag" content="Tech Blogs"></meta>
        <meta property="article:tag" content="Technology Updates"></meta>
        <meta property="article:section" content="Resources"/>
        <meta property="og:updated_time" content={`${postData.updated_at}`}/>
        <meta property="og:image:secure_url" content={`${baseuri}/` + "image/post/" + postData.image}></meta>
        <meta property="og:image:width" content="800"></meta>
        <meta property="og:image:height" content="533"></meta>
        <meta property="og:image:type" content="image/jpeg"></meta>
        <meta property="article:published_time" content={`${postData.created_at}`}></meta>
        <meta property="article:modified_time" content={`${postData.updated_at}`}></meta>
        <meta property="og:image:alt" content="35+ Best Technology Websites &amp; Blogs"></meta>
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

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={postData.seo_title}></meta>
        <meta name="twitter:description" content={postData.seo_description}></meta>
        <meta name="twitter:site" content="@knowledgelover7"></meta>
        <meta name="twitter:creator" content="@gauravdhiman"></meta>
        <meta name="twitter:image" content="https://knowledgelover.com/core/image/Technology-Lover.jpg"></meta>

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
                        <a href="/Allpost">Blog</a>
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
                        <span class="color-gray-700 text-sm">
                          {postData.view_count} Views this post
                        </span>
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
                          <Link href={`/tag/${tag.slug}`}>
                            <a
                              key={tag.id}
                              class="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up"
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
