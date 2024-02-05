import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import AppLayout from "../../component/Layout/Layout";
import Fetcher from "../api/Fetcher";

const PostsByCategoryPage = () => {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const router = useRouter();
  const { categorySlug } = router.query;

  const { data, error } = useSWR(
    categorySlug ? `${baseuri}/api/posts-by-category/${categorySlug}` : null,
    Fetcher
  );

  if (error) return <div>Error loading posts</div>;
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

  const { category, posts } = data;

  return (
    <div>
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
                        {category.name}
                      </h1>
                    </div>
                    <p className="color-gray-500 text-base wow animate__animated animate__fadeIn">
                      {category.description || "No description"}
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
                          <Link href={"/Allpost"}>
                            <a>Blog</a>
                          </Link>
                        </li>
                        <li>
                          <a> {categorySlug}</a>
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
                    {posts.map((post) => (
                      <div className="col-lg-4" key={post.id}>
                        <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                          <div className="card-image mb-20">
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
                          <div className="card-info">
                            <Link href={`/post/${post.slug}`}>
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
                                <Link href={`/post/${post.slug}`}>
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
};
PostsByCategoryPage.layout = AppLayout;
export default PostsByCategoryPage;
