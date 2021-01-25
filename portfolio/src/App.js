import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>

        <Route path="/aviation">
            <div>
              <Aviation />
            </div>
        </Route>

        <Route path="/personal">
            <div>
              <Personal />
            </div>
        </Route>

        <Route path="/programming">
            <div>
              <Programming />
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
