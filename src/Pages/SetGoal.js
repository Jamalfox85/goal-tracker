import React from "react";
import {useState} from "react"
import MilestoneInput from "../components/CustomerInfo/MilestoneInput";

const SetGoal = () => {

  const [goalTitle, setGoalTitle] = useState("Title")
  const [isDisabled, setIsDisabled] = useState(false)
  const [tier, setTier] = useState(2)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDisabled(true)
  }
  const handleEdit = () => {
    setIsDisabled(false)
  }

  return (
    <div>
      <div className='goal_header'>
        <h1>{goalTitle}<hr/><span onClick={handleEdit}>Edit</span></h1>
        <form  onSubmit={handleSubmit}>
          <input disabled={isDisabled} name="goal" onChange={event => setGoalTitle(event.target.value)}/> 
          <input type="submit"/>
        </form>
      </div>
      <div className='goal_length'>
          <h4>Goal Length</h4>
          <input type="radio" value="3-month" name="length"/>3-month
          <input type="radio" value="6-month" name="length"/> 6-month
          <input type="radio" value="12-month" name="length"/> 12-month
      </div>
      <div className='goal_result'>
        <form onSubmit={handleSubmit}>
          <MilestoneInput milestone="1st milestone" disabled={tier >= 3 ? false : true}/>
          <MilestoneInput milestone="1st milestone" disabled={tier >= 2 ? false : true}
          
          />
          <MilestoneInput milestone="1st milestone" disabled={tier >= 2 ? false : true}/>
          <MilestoneInput milestone="end goal" />
          <input type="submit"/>
        </form>
      </div>
    </div>
  );
};

export default SetGoal;
