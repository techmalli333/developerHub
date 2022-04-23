import axios from "axios";
import React, { useState } from "react";
import NavbarDashboard from "./NavbarDashboard";

export default function IndProfile({ match }) {
  const [rating, setRating] = useState(null);
  const [taskProvider, setTaskProvider] = useState(null);

  const submitHandelar = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:4000/myprofile", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setTaskProvider(res.fullname));

    let review = {
      taskProvider,
      taskWorker: match.params.id,
      rating,
    };
    axios
      .post("http://localhost:4000/addreview", review, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        alert(res.data);
      });
  };

  return (
    <div className="fluid-container">
      <NavbarDashboard />
      <div class="row m-3 justify-content-center">
        <div class="col-sm-8 ">
          <div class="card p-2 text-center">
            <i className="fa fa-user text-warning" style={{ fontSize: 100 }} />
            <div class="card-body">
              <h5 class="card-title">{match.params.fullname}</h5>
              <p class="card-text">{match.params.email}</p>
            </div>
          </div>

          <h4 className=" mt-5">Review and Ratings</h4>
          <form className="m-3" onSubmit={submitHandelar}>
            <div className="card p-2">
              <h6>Enter your review</h6>
              <input
                type="text"
                className="form-control"
                name="rating"
                placeholder="Enter your rating out of 5"
                onChange={(e) => setRating(e.target.value)}
                required
              />
              <input
                type="submit"
                value="Add Rating"
                className="btn btn-primary w-25 mt-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
