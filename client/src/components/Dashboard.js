import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

import NavbarDashboard from "./NavbarDashboard";
export default function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/allprofiles/", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data));
  }, []);
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <NavbarDashboard />
      <div class="row m-3">
        {data.length >= 1
          ? data.map((profile) => (
              <div class="col-sm-12 col-md-6 col-lg-4 p-2 ">
                <div class="card p-2 text-center">
                  <i
                    className="fa fa-user text-info"
                    style={{ fontSize: 100 }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{profile.fullname}</h5>
                    <p class="card-text">
                      Skills :{" "}
                      {profile.skill.split(",").join(`, `).toUpperCase()}
                    </p>
                    <div className="d-flex justify-content-center ">
                      <p class="card-text me-5">
                        <small class="text-muted">rating</small>
                      </p>
                      <Link
                        to={`/indProfile/${profile.fullname}/${
                          profile.email
                        }/${profile.skill
                          .split(",")
                          .join(`, `)
                          .toUpperCase()}/${profile._id}`}
                      >
                        <button className="btn btn-primary">
                          View Profile
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
