import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen text-white bg-gray-950">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
