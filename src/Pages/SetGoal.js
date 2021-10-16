import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import MilestoneInput from "../components/CustomerInfo/MilestoneInput";

const SetGoal = () => {
  const [goalTitle, setGoalTitle] = useState("Title");
  const [isDisabled, setIsDisabled] = useState(false);
  const [tier, setTier] = useState(2);

  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/schedule");
  };
  const handleEdit = () => {
    setIsDisabled(false);
  };
  const checkMilestoneData = (data) => {
    if (data) {
      setTier(tier + 1)
      console.log(data);
      console.log(tier)
    }
  };

  const milestoneData = [
    {
      milestone: "1st milestone",
      disabled: true,
      displayTier: 3,
    },
    {
      milestone: "2nd milestone",
      disabled: true,
      displayTier: 3,
    },
    {
      milestone: "3rd milestone",
      disabled: true,
      displayTier: 2,
    },
    {
      milestone: "4th milestone",
      disabled: false,
      displayTier: 3,
    },
    {
      milestone: "5th milestone",
      disabled: true,
      displayTier: 3,
    },
    {
      milestone: "6th milestone",
      disabled: true,
      displayTier: 2,
    },
    {
      milestone: "7th milestone",
      disabled: true,
      displayTier: 3,
    },
    {
      milestone: "8th milestone",
      disabled: false,
      displayTier: 3,
    },
    {
      milestone: "9th milestone",
      disabled: true,
      displayTier: 2,
    },
    {
      milestone: "10th milestone",
      disabled: true,
      displayTier: 3,
    },
    {
      milestone: "11th milestone",
      disabled: true,
      displayTier: 3,
    },
    {
      milestone: "12th milestone",
      disabled: false,
      displayTier: 1,
    },
  ];

  return (
    <div>
      <div className="goal_header">
        <h1>
          {goalTitle}
          <hr />
          <span onClick={handleEdit}>Edit</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            disabled={isDisabled}
            name="goal"
            onChange={(event) => setGoalTitle(event.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
      <div className="goal_result">
        <form onSubmit={handleSubmit}>
          {milestoneData.map(({item, index, milestone, disabled, displayTier}) => (
            <MilestoneInput
              key={Math.random()}
              milestone={milestone}
              disabled={tier > displayTier ? false: true}
              displayTier={displayTier}
              checkMilestoneData={checkMilestoneData}
            />
          ))}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SetGoal;
