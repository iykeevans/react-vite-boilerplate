import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getPosts } from "../../api/services/posts";

const Posts = () => {
  const { isLoading, data: response } = useQuery(["posts"], getPosts);
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {response?.data.map((post) => (
        <div key={post.id}>
          {post.body}

          <button onClick={() => navigate(post.id.toString())}>
            View Post
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
