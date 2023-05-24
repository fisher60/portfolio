import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Aviation from "./components/aviation.jsx";
import Personal from "./components/personal.jsx";
import Professional from "./components/professional.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
        <Navbar />

      <div className="md:pl-8 text-white content-right md: overflow-hidden">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/aviation" element={<Aviation />}/>
            <Route path="/personal" element={<Personal />}/>
            <Route path="/professional" element={<Professional />}/>
          </Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
