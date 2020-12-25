import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import "./App.css";

function App() {
  return (
    <Router>
        <Navbar />

      <div className="content-right">
        <Switch>

        <Route path="/about">
            <div>
              <About />
            </div>
        </Route>

          <Route path="/">
            <div>
              <Home />
            </div>
          </Route>
          
        </Switch>
      </div>

    </Router>
  );
}

export default App;
