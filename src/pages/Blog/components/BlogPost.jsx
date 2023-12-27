import React from "react";
import { useParams } from "react-router-dom";
import useBlogStore from "../../../components/zustand/Store";

const BlogPost = () => {
  const { postId } = useParams();
  const { blogPosts } = useBlogStore();
  const post = blogPosts.find((post) => post.id === postId);
  return (
    <div>
      <div>
        <img
          src={post.image}
          alt=""
          className="w-full h-40 object-cover object-top"
        />
        <div className="px-2">
          <h2 className="font-medium text-lg ">{post.title}</h2>
          <div className="text-sm w-full overflow-auto">{post.content}</div>
          <p className="mt-5">posetd by Open Fashion | 3 Days ago</p>
          <div className="flex flex-row gap-x-6 text-xs mx-3 mt-2 text-slate-400">
            <span>#Fashion</span>
            <span className="">#Tips</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
