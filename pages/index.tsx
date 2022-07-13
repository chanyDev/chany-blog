import { allPosts, Post } from 'contentlayer/generated';
import Link from 'next/link';

const HomePage = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.slug} className="flex flex-col gap-2.5">
          <h2 className="text-2xl">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </h2>
          <time dateTime={post.publishedDate}>{post.publishedDate}</time>
          <div>{post.description}</div>
        </div>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) =>
      Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate)),
  );

  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
