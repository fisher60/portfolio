import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import "./App.css";

function App() {
  return (
    <Router>
        <Navbar />

      <Switch>

      <Route path="/about">
          <div style={{transition: "margin-left .5s"}}>
            <About />
          </div>
      </Route>

        <Route path="/">
          <div style={{transition: "margin-left .5s"}}>
            <Home />
          </div>
        </Route>
        
      </Switch>

    </Router>
  );
}

export default App;
