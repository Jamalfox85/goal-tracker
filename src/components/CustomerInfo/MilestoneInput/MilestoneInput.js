import { React, useState } from "react";
import "./MilestoneInput.css";
import editIcon from "../../../Assets/edit-icon.png";
import checkIcon from "../../../Assets/check-icon.png";

const MilestoneInput = ({ disabled, milestone, checkMilestoneData }, props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [milestoneValue, setMilestoneValue] = useState("");

  const handleMilestoneInputChange = (e) => {
    setMilestoneValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    checkMilestoneData(milestoneValue);
  };
  const handleEdit = () => {
    setIsDisabled(false);
  };

  return (
    <div
      className="milestoneInput"
      style={disabled ? { pointerEvents: "none", opacity: "0.4" } : {}}
    >
      <div className="milestoneTag">{milestone}</div>
      <input
        disabled={isDisabled}
        placeholder="End Goal"
        type="text"
        onChange={handleMilestoneInputChange}
        className="milestoneInputField"
      />
      <div className="milestoneBttns">
        <span onClick={handleEdit}>
          <img className="milestoneBttn" src={editIcon} alt="submit button" />
        </span>
        <span onClick={handleSubmit}>
          <img className="milestoneBttn" src={checkIcon} alt="submit button" />
        </span>
      </div>
    </div>
  );
};

export default MilestoneInput;
