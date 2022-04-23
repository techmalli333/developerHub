import React, { useState, useEffect } from "react";
import axios from "axios";

import { Redirect } from "react-router-dom";

import NavbarDashboard from "./NavbarDashboard";

export default function Myprofile() {
  const [data, setData] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/myprofile/", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data));
    axios
      .get("http://localhost:4000/myreview/", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setReview(res.data));
  }, []);
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <NavbarDashboard />
      <div class="row m-3 justify-content-center">
        <div class="col-sm-12 col-md-6  m-2 ">
          <div class="card p-2 text-center">
            <i className="fa fa-user text-info" style={{ fontSize: 100 }} />
            <div class="card-body">
              <h5 class="card-title">{data.fullname}</h5>
              <p class="card-text">{data.email}</p>
              {review &&
                review.map((review) => (
                  <div>
                    <h4>{review.taskProvider}</h4>
                    <p>{review.rating}/5</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
