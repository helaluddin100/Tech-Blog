import useSWR from "swr";
import Link from "next/link";
const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetcher = (url) => fetch(url).then((res) => res.json());

const PopularTags = () => {
  const { data: popularTags, error } = useSWR(
    `${baseuri}/api/popular-tags`,
    fetcher
  );

  if (error) {
    return <h1>Failed to load</h1>;
  }

  if (!popularTags) {
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
      <div className="box-sidebar bg-gray-850 border-gray-800">
        <div className="head-sidebar">
          <h5 className="line-bottom d-inline-block ">Popular Tags</h5>
        </div>
        <div className="content-sidebar pb-20">
          {popularTags.map((tag) => (
            <Link href={`/tag/${tag.slug}`} key={tag.id}>
              <a
                key={tag.id}
                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 "
              >
                {tag.name} Posts: {tag.posts_count}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTags;
