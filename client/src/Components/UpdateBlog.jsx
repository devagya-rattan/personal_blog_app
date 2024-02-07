import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateBlog = () => {
  const [blogUpdate, setBlogUpdate] = useState({
    title: "",
    content: "",
    featuredImage: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/post/${id}`)
      .then((res) => {
        setBlogUpdate({
          title: res.data.title,
          content: res.data.content,
          featuredImage: res.data.featuredImage,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateBlogsInfo");
      });
  }, [id]);
  const onChange = (e) => {
    setBlogUpdate({ ...blogUpdate, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: blogUpdate.title,
      content: blogUpdate.content,
      featuredImage: blogUpdate.featuredImage,
    };

    axios
      .put(`http://localhost:8080/api/post/update/${id}`, data)
      .then((res) => {
        navigate(`/blogdetails/${id}`);
      })
      .catch((err) => {
        console.log("Error in UpdateBlogInfo!");
      });
  };
  return (
    <>
      <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md my-8">
        <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
        <form noValidate onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter the title"
              id="title"
              name="title"
              value={blogUpdate.title}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-semibold mb-2"
            >
              content
            </label>
            <textarea
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter the content"
              rows="4"
              id="content"
              name="content"
              value={blogUpdate.content}
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-semibold mb-2"
            >
              Image URL
            </label>
            <input
              type="text"
              onChange={onchange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter th image url"
              id="featuredImage"
              name="featuredImage"
              value={blogUpdate.featuredImage}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateBlog;
