import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandelar = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/login", data).then((res) => {
      // console.log(res.data); // token
      localStorage.setItem("token", res.data.token);
      setAuth(true);
    });
  };
  // if (localStorage.getItem("token")) {     // some time getting token may be dalay it's depending on DB so we r using State
  //   return <Redirect to="dashboard" />;
  // }
  if (auth) {
    return <Redirect to="dashboard" />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center text-center m-4">
      <div className="text-center bg-dark col-lg-6 col-md-12 col-sm-12 col-xs-12 rounded text-white">
        <i className="fa fa-user text-warning" style={{ fontSize: 200 }} />
        <h1>Login</h1>

        <form className="m-3" onSubmit={submitHandelar}>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address"
            onChange={changeHandler}
          />
          <br />
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="password"
            onChange={changeHandler}
          />
          <br />
          <br />
          {/* <Link to="/"> */}
          <input type="submit" value="Login" className="btn btn-primary w-50" />
          {/* </Link> */}
          <br />
          <br />
          <input
            type="submit"
            value="Forget Password"
            className="btn btn-outline-danger w-50"
          />
          <br />
          <br />
          <span>Don't Have an Account?</span> &nbsp;&nbsp;
          <Link to="/register">
            <button className="btn btn-outline-info">Register</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
