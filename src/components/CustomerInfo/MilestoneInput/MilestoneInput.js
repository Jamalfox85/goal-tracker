import { React, useState } from "react";
import "./MilestoneInput.css";
import editIcon from "../../../Assets/edit-icon.png";
import checkIcon from "../../../Assets/check-icon.png";

const MilestoneInput = (
  { disabled, milestone, checkMilestoneData, inputValue, grabInputValue },
  props
) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [milestoneValue, setMilestoneValue] = useState(1);

  const handleMilestoneInputChange = (e) => {
    setMilestoneValue(e.target.value);
  };

  const handleMilestoneSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    checkMilestoneData(milestoneValue);
    grabInputValue(milestoneValue);
  };
  const handleEdit = () => {
    setIsDisabled(false);
  };

  return (
    <div
      className="milestoneInput"
      style={
        disabled
          ? { pointerEvents: "none", opacity: "0" }
          : { opacity: "1", transition: 0.3 }
      }
    >
      <div className="milestoneTag">{milestone}</div>
      <input
        disabled={isDisabled}
        style={isDisabled ? { backgroundColor: "#999" } : {}}
        required
        placeholder="End Goal"
        type="text"
        onChange={handleMilestoneInputChange}
        className="milestoneInputField"
        defaultValue={inputValue}
      />
      <div className="milestoneBttns">
        <span onClick={handleEdit}>
          <img className="milestoneBttn" src={editIcon} alt="submit button" />
        </span>
        <span onClick={handleMilestoneSubmit}>
          <img className="milestoneBttn" src={checkIcon} alt="submit button" />
        </span>
      </div>
    </div>
  );
};

export default MilestoneInput;
