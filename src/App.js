import Landing from "./Pages/Landing";
import SetGoal from "./Pages/SetGoal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "./Pages/Schedule";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/setgoal">
            <SetGoal />
          </Route>
          <Route exact path="/schedule">
            <Schedule />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
