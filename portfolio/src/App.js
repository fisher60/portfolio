import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Aviation from "./components/aviation.jsx";
import Personal from "./components/personal.jsx";
import Programming from "./components/programming.jsx";
import "./App.css";

function App() {
  return (
    <Router>
        <Navbar />

      <div className="content-right">
        <Routes>

          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/aviation" element={<Aviation />}/>
            <Route path="/personal" element={<Personal />}/>
            <Route path="/programming" element={<Programming />}/>
          </Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
