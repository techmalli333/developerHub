import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Register() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    skill: "",
    password: "",
    confirmpassword: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandelar = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="d-flex justify-content-center align-items-center text-center m-4">
      <div className="text-center bg-dark col-lg-6 col-md-12 col-sm-12 col-xs-12 rounded text-white">
        <i className="fa fa-user text-warning" style={{ fontSize: 200 }} />
        <h1>Register</h1>

        <form className="m-3" onSubmit={submitHandelar}>
          <input
            type="text"
            name="fullname"
            className="form-control"
            placeholder="Full Name"
            onChange={changeHandler}
          />
          <br />
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email Address"
            onChange={changeHandler}
          />
          <br />
          <input
            type="text"
            name="mobile"
            className="form-control"
            placeholder="Mobile"
            onChange={changeHandler}
          />
          <br />
          <input
            type="text"
            name="skill"
            className="form-control"
            placeholder="Skill"
            onChange={changeHandler}
          />
          <p id="text-left">
            Please provide skills by separation of comma({" "}
            <b className="text-white">,</b> )
          </p>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="confirmpassword"
            className="form-control"
            placeholder="Confirm Password"
            onChange={changeHandler}
          />
          <br />
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary w-50"
            onChange={changeHandler}
          />
          <br />
          <br />
          <span>Already Have an Account?</span> &nbsp;&nbsp;
          <Link to="/login">
            <button className="btn btn-outline-info">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
