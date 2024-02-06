import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedimage] = useState("");
  const history  = useNavigate();
  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8080/api/post", {
          title,
          content,
          featuredImage,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("Post already exists");
          } else if (res.data === "notexist") {
            history("/bloglist");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md my-8">
        <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
        <form noValidate onSubmit={submit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter the title"
              id="title"
              name="title"
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
               onChange={(e) => {
                setContent(e.target.value);
              }}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter the content"
              rows="4"
              id="content"
              name="content"
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
              onChange={(e) => {
                setFeaturedimage(e.target.value);
              }}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter th image url"
              id="featuredImage"
              name="featuredimage"
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

export default CreateBlog;
