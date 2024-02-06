import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
const ShowBlog = () => {
  const [blogs, setblogs] = useState([]);
  const blogList =
    blogs.length === 0
      ? "There is no blogs posts"
      : blogs.map((blog, k) => <BlogCard blog={blog} key={k} />);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/post/getblog")
      .then((res) => {
        setblogs(res.data);
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogList}
        </div>
      </div>
    </>
  );
};

export default ShowBlog;
