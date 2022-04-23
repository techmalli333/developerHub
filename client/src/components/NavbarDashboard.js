import React from "react";
import { Link } from "react-router-dom";

export default function NavbarDashboard() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <span className=" mr-1f">
              <b className="text-danger">L</b>
              <b className="text-success">e</b>
              <b className="text-primary">e</b>
            </span>{" "}
            App
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-primary me-4" type="submit">
                Search
              </button>
            </form>
            <div>
              <Link to="/myprofile">
                <button class="btn btn-outline-info me-2" type="submit">
                  My Profile
                </button>
              </Link>
              <Link to="login">
                <button
                  className="btn btn-outline-danger "
                  onClick={() => localStorage.removeItem("token")}
                >
                  <i className="fa fa-user" /> Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
