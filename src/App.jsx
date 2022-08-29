import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css'
import Home from "./pages/Home";
import PostMortems from "./pages/PostMortems";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post-mortems" component={PostMortems} />
        </Switch>
    </Router>
  )
}
