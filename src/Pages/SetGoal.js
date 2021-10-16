import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import MilestoneInput from "../components/CustomerInfo/MilestoneInput";

const SetGoal = () => {
  const [goalTitle, setGoalTitle] = useState("Title");
  const [isDisabled, setIsDisabled] = useState(false);
  const [tier, setTier] = useState(12);

  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/schedule");
  };
  const handleEdit = () => {
    setIsDisabled(false);
  };

  const milestoneData = [
    {
      milestone: "1st milestone",
      disabled: true,
      tier: 3,
    },
    {
      milestone: "2nd milestone",
      disabled: true,
      tier: 3,
    },
    {
      milestone: "3rd milestone",
      disabled: true,
      tier: 2,
    },
    {
      milestone: "4th milestone",
      disabled: false,
      tier: 1,
    },
    {
      milestone: "5th milestone",
      disabled: true,
      tier: 3,
    },
    {
      milestone: "6th milestone",
      disabled: true,
      tier: 3,
    },
    {
      milestone: "7th milestone",
      disabled: true,
      tier: 2,
    },
    {
      milestone: "8th milestone",
      disabled: false,
      tier: 1,
    },
    {
      milestone: "9th milestone",
      disabled: true,
      tier: 3,
    },
    {
      milestone: "10th milestone",
      disabled: true,
      tier: 3,
    },
    {
      milestone: "11th milestone",
      disabled: true,
      tier: 2,
    },
    {
      milestone: "12th milestone",
      disabled: false,
      tier: 1,
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
      <div className="goal_length">
        <h4>Goal Length</h4>
        <input type="radio" value="3-month" name="length" />
        3-month
        <input type="radio" value="6-month" name="length" /> 6-month
        <input type="radio" value="12-month" name="length" /> 12-month
      </div>
      <div className="goal_result">
        <form onSubmit={handleSubmit}>
          {milestoneData.map((item, index) => (
            <MilestoneInput
              key={index}
              milestone={milestoneData[index].milestone}
              disabled={milestoneData[index].tier <= tier ? false : true}
              tier={milestoneData[index].tier}
            />
          ))}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SetGoal;
