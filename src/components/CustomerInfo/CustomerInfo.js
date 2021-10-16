import React from "react";
import { useState } from "react";

const CustomerInfo = (props) => {
  const [userName, setUserName] = useState("Jeff");
  const [email, setEmail] = useState("Jeff@me.com");
  const [pinkScenario, setPinkScenario] = useState("Pink Scenario");
  //   const [redirect, setRedirect] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.history.push("/setgoal");
  };

  return (
    <div>
      <div className="userInfo">
        <h1>{userName}</h1>
        <h1>{email}</h1>
        <h1>{pinkScenario}</h1>
      </div>
      <form className="userInfoForm">
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Pink Scenario:
          <textarea
            rows="8"
            cols="75"
            onChange={(event) => setPinkScenario(event.target.value)}
          ></textarea>
        </label>
        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default CustomerInfo;
