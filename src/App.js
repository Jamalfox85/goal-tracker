import Landing from "./Pages/Landing";
import SetGoal from "./Pages/SetGoal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
