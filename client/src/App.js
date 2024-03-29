import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import CreateBlog from "./Components/CreateBlog";
import ShowBlog from "./Components/ShowBlog";
import ShowBlogDetails from "./Components/ShowBlogDetails";
import UpdateBlog from "./Components/UpdateBlog";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/addblog" element={<CreateBlog />} />
          <Route path="/blogdetails/:id" element={<ShowBlogDetails/>} />
          <Route path="/blogupdate/:id" element={<UpdateBlog/>} />
          <Route path="/bloglist" element={<ShowBlog />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
