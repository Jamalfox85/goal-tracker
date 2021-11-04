import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CustomerInfo.css";
import laptopImg from "../../../Assets/Laptop.png";
import Blob1 from "../../../Assets/Blob1.png";
import Blob2 from "../../../Assets/Blob2.png";
import Blob3 from "../../../Assets/Blob3.png";
import Blob4 from "../../../Assets/Blob4.png";

const CustomerInfo = (props) => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pinkScenario, setPinkScenario] = useState("");
  //   const [redirect, setRedirect] = useState(true);

  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/setgoal");
  };

  return (
    <div className="customer-info-wrapper">
      <div className="user-info-form">
        <form onSubmit={handleSubmit}>
          <h1 className="user-info-form-header">
            Let's Gather
            <br /> Some Info
          </h1>
          <div className="name-inputs">
            <label>
              <p>First Name</p>
              <input
                type="text"
                name="firstName"
                maxlength="10"
                required
                onChange={(event) => setUserFirstName(event.target.value)}
              />
            </label>
            <label>
              <p>Last Name</p>
              <input
                type="text"
                name="lastName"
                maxlength="10"
                required
                onChange={(event) => setUserLastName(event.target.value)}
              />
            </label>
          </div>
          <label className="email-input">
            <p>Email</p>
            <input
              type="email"
              name="email"
              maxlength="25"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="pink-scenario">
            <p>Goals</p>
            <textarea
              rows="8"
              cols="75"
              required
              onChange={(event) => setPinkScenario(event.target.value)}
            ></textarea>
          </label>
          <input
            className="user-info-submit-bttn"
            type="submit"
            value="Start Planning"
          />
        </form>
      </div>
      <div className="user-info">
        <div className="user-info-laptop-text">
          <div className="user-name-laptop-text">
            <p>{userFirstName}</p>
            <p>{userLastName}</p>
          </div>
          <p>{email}</p>
          <p className="user-pink-scenario">{pinkScenario}</p>
        </div>
        <img className="landing-laptop-img" src={laptopImg} alt="laptop svg" />
      </div>
      <div className="bg-blobs">
        <img className="blob1" src={Blob1} alt="blob" />
        <img className="blob2" src={Blob2} alt="blob" />
        <img className="blob3" src={Blob3} alt="blob" />
        <img className="blob4" src={Blob4} alt="blob" />
      </div>
    </div>
  );
};

export default CustomerInfo;
