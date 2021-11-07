import Landing from "./Pages/Landing";
import SetGoal from "./Pages/SetGoal";
import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "./Pages/Schedule";
import "../src/Main.css";

function App() {
  const [milestoneInformation, setMilestoneInformation] = useState([]);

  const passMilestones = (listData) => {
    setMilestoneInformation(listData.toString().split(","));
    console.log(milestoneInformation);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/setgoal">
            <SetGoal passMilestones={passMilestones} />
          </Route>
          <Route exact path="/schedule">
            <Schedule milestoneInformation={milestoneInformation} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
