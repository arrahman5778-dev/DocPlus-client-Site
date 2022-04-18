import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Login from "./Components/UserLogin/Login/Login";
import Service from "./Components/Service/Service";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import SignUp from "./Components/UserLogin/SignUp/SignUp";
import RequireAuth from "./Components/UserLogin/RequireAuth/RequireAuth";
import Navbar from "./Components/Sheared/Navbar/Navbar";
import Footer from "./Components/Sheared/Footer/Footer";
function App() {
  return (
    <div className="App">
      
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/service"
          element={
            <RequireAuth>
              <Service />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
