import React from "react";
import { useNavigate } from "react-router-dom";
const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate(`/blogdetails/${blog._id}`);
  };
  return (
    <>
      <div
        className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md my-8 cursor-pointer"
        onClick={handlenavigate}
      >
        <img
          className="w-full h-48 object-cover object-center"
          src={blog.featuredImage}
          alt="Blog Thumbnail"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {blog.title}
          </h2>
          <p className="text-gray-600 mb-3"> {blog.content} </p>
          <p className="text-gray-700"> {blog.publishedAt} </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
