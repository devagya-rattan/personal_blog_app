import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { MdOutlineDeleteOutline } from "react-icons/md";

import axios from "axios";
const ShowBlogDetails = () => {
  const [blogdetails, setBlogdetails] = useState({});

  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/post/${id}`)
      .then((res) => {
        setBlogdetails(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBlogdetails", err);
      });
  }, [id]);
  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8080/api/post/${id}`)
      .then((res) => {
        navigate('/bloglist');
      })
      .catch((err) => {
        console.log('Error form ShowBookDetails_deleteClick');
      });
  };
  return (
    <>
      <div className="container mx-auto p-8">
        {/* Blog Post */}
        <article className="bg-white p-8 rounded-lg shadow-md cursor-pointer">
          {/* Blog Post Header */}
          <header className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800">
              {blogdetails.title}
            </h1>
            <p className="text-gray-500 mt-2">
              Published on{" "}
              <span className="font-semibold">{blogdetails.publishedAt}</span>
            </p>
          </header>
          {/* Blog Post Content */}
          <div className="prose max-w-full">
            <p>{blogdetails.content}</p>
            {/* Add more content as needed */}
          </div>
          <div className="prose max-w-full">
            <p>
              <img
                className="w-full h-48 object-cover object-center"
                src={blogdetails.featuredImage}
                alt="Blog Thumbnail"
              />
            </p>
            {/* Add more content as needed */}
          </div>
          {/* Blog Post Footer */}
          <footer className="mt-8 ">
            <p className="text-gray-600 flex flex-row gap-4 text-xl">
              <span className="text-blue-500">
              <Link to={`/blogupdate/${blogdetails._id}`}>

                <FaPencil />{" "}
              </Link>
              </span>{" "}
              <span className="text-blue-500">
                <MdOutlineDeleteOutline onClick={() => {
                onDeleteClick(blogdetails._id);
              }} />
              </span>
            </p>
          </footer>
        </article>
      </div>
    </>
  );
};

export default ShowBlogDetails;
