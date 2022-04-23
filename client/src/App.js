import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Myprofile from "./components/Myprofile";
import IndProfile from "./components/IndProfile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/myprofile" exact component={Myprofile} />
          <Route
            path="/indProfile/:fullname/:email/:skill/:id"
            exact
            component={IndProfile}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
