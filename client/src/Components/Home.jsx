import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <div className="text-black">{location.state.id} </div>
      home
    </>
  );
};

export default Home;
