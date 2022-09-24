import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../api/services/posts";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data: response } = useQuery(["post"], () =>
    getPost(Number(id))
  );

  if (isLoading) return <div>Loading....</div>;

  return (
    <div>
      {response?.data.body}{" "}
      <button onClick={() => navigate("/posts")}>Go back</button>
    </div>
  );
};

export default Post;
