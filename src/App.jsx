/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, BrowserRouter as Router,  Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import PageNotFound from "./pages/page-not-found";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { getCookie } from "./services/cookieService";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen text-white bg-gray-950">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={ (getCookie("username") !== "")
              ? <Navigate to="/login" /> 
              : <Navigate to="/home" />
            } />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
            <Route path="/404" element={<PageNotFound />} />/
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
