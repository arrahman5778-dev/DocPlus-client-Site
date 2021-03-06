import './App.css';
import Navbar from './Components/Sheared/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Login from './Components/UserLogin/Login/Login';
import Service from './Components/Service/Service';
import Footer from './Components/Sheared/Footer/Footer';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import SignUp from './Components/UserLogin/SignUp/SignUp';
import RequireAuth from './Components/UserLogin/RequireAuth/RequireAuth';
import CheckOut from './Components/CheckOut/CheckOut';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/checkout" element={<RequireAuth><CheckOut /></RequireAuth>} />
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