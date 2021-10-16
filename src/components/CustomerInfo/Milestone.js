import {React, useState} from 'react'

const Milestone = ({disabled, milestone}) => {

    const [isDisabled, setIsDisabled] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsDisabled(true)
      }
      const handleEdit = () => {
        setIsDisabled(false)
      }

    return (
        <div style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}>
            <label>
            {milestone}
            <input disabled={isDisabled} placeholder="End Goal" type='text'/>
            <span onClick={handleSubmit}>X</span><span onClick={handleEdit}>O</span>
          </label>
        </div>
    )
}

export default Milestone
