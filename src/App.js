import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Course from "./containers/Course/Course";
import Users from "./containers/Users/Users";
import NotFound from "./components/NotFound/NotFound";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/users"
                    exact
                    activeStyle={{
                      color: "red"
                    }}
                  >
                    Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses"
                    exact
                    activeStyle={{
                      color: "red"
                    }}
                  >
                    Courses
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Route path="/course" component={Course} />
            <Redirect from="/all-courses" to="/courses" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
