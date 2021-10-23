import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import MilestoneInput from "../components/CustomerInfo/MilestoneInput/MilestoneInput";
import "./SetGoal.css";
// import editIcon from "../Assets/edit-icon.png";

const SetGoal = () => {
  // const [goalTitle, setGoalTitle] = useState("This is Your Goal");
  // const [isDisabled, setIsDisabled] = useState(false);
  const [tier, setTier] = useState(2);
  // const [tierCounter, setTierCounter] = useState(0);

  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/schedule");
  };
  // const handleEdit = () => {
  //   setIsDisabled(false);
  // };
  const checkMilestoneData = (data) => {
    if (data) {
      setTier(tier + 1);
    }
  };

  const milestoneData = [
    {
      milestone: "1st milestone",
      disabled: true,
      displayTier: 5,
    },
    {
      milestone: "2nd milestone",
      disabled: true,
      displayTier: 5,
    },
    {
      milestone: "3rd milestone",
      disabled: true,
      displayTier: 2,
    },
    {
      milestone: "4th milestone",
      disabled: false,
      displayTier: 5,
    },
    {
      milestone: "5th milestone",
      disabled: true,
      displayTier: 5,
    },
    {
      milestone: "6th milestone",
      disabled: true,
      displayTier: 2,
    },
    {
      milestone: "7th milestone",
      disabled: true,
      displayTier: 5,
    },
    {
      milestone: "8th milestone",
      disabled: false,
      displayTier: 5,
    },
    {
      milestone: "9th milestone",
      disabled: true,
      displayTier: 2,
    },
    {
      milestone: "10th milestone",
      disabled: true,
      displayTier: 5,
    },
    {
      milestone: "11th milestone",
      disabled: true,
      displayTier: 5,
    },
    {
      milestone: "12th milestone",
      disabled: false,
      displayTier: 1,
    },
  ];

  return (
    <div className="set-goal">
      <div className="goal-header">
        <h6 className="h6-header">Let's Gather Some Info</h6>
        <h1>
          {/* {goalTitle} */}
          {/* <span onClick={handleEdit}>
            <img className="editIcon" src={editIcon} alt="edit icon" />
          </span> */}
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            className="goal-input-field"
            // disabled={isDisabled}
            name="goal"
            required
            placeholder="This is Your Goal"
            // onChange={(event) => setGoalTitle(event.target.value)}
          />
        </form>
      </div>
      <div className="goal-result">
        <form className="milestoneList" onSubmit={handleSubmit}>
          {milestoneData.map(
            ({ item, index, milestone, disabled, displayTier }) => (
              <MilestoneInput
                key={Math.random()}
                milestone={milestone}
                disabled={tier > displayTier ? false : true}
                displayTier={displayTier}
                checkMilestoneData={checkMilestoneData}
              />
            )
          )}
          <input
            className="generateScheduleBttn"
            type="submit"
            value="Generate Schedule"
          />
        </form>
      </div>
    </div>
  );
};

export default SetGoal;
