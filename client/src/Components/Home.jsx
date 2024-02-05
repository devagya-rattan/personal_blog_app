import React from "react";
import { useLocation, Link } from "react-router-dom";
import CallToaction from "./CallToaction";
const Home = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to my Blog{" "}
          <div className="text-black">{location.state.id} </div>
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        {/* <Link
          to="#"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link> */}
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToaction />
      </div>
    </>
  );
};

export default Home;
