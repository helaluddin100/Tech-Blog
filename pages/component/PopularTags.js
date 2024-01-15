// Your Next.js component or page

import useSWR from "swr";

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div class="box-sidebar bg-gray-850 border-gray-800">
        <div class="head-sidebar">
          <h5 class="line-bottom d-inline-block ">Popular Tags</h5>
        </div>
        <div class="content-sidebar pb-20">
          {popularTags.map((tag) => (
            <a
              key={tag.id}
              class="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 "
              href="blog-archive.html"
            >
              {tag.name} Posts: {tag.posts_count}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTags;