import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts" key={Math.random()*1000}>
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
