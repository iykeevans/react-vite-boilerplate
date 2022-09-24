import { Route, Routes } from "react-router-dom";

import Posts from "../../../modules/Posts";
import Post from "../../../modules/Posts/Post";

function PostRouter() {
  return (
    <Routes>
      <Route index element={<Posts />} />
      <Route path="/:id" element={<Post />} />
    </Routes>
  );
}
export default PostRouter;
