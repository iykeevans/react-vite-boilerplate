import { AxiosResponse } from "axios";
import { getCall } from "../apiCalls";

const POSTS_URL = "/posts";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = () => {
  return getCall(POSTS_URL) as Promise<AxiosResponse<IPost[]>>;
};

export const getPost = (id: number) => {
  return getCall(`${POSTS_URL}/${id}`) as Promise<AxiosResponse<IPost>>;
};
