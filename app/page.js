import BlogCard from "@/components/BlogCard";
import styles from "./styles.module.css";

async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  return res.json();
}
export default async function Home() {
  const { posts } = await getPosts();
  console.log(posts);
  return (
    <div className={styles.blogContainer}>
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
