import React, { Component } from "react";
import {
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";

import Courses from "./containers/Courses/Courses";
// import Course from "./containers/Course/Course";
import Users from "./containers/Users/Users";
import NotFound from "./components/NotFound/NotFound";

import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/courses"
                    activeStyle={{
                      color: "red"
                    }}
                  >
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/users"
                    activeStyle={{
                      color: "red"
                    }}
                  >
                    Users
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/users" component={Users} />
            {/*<Route path="/courses/:courseId/:courseTitle" component={Course} />*/}
            {/*<Route path="/courses/:courseId" component={Course} /> -moved as nested route into Courses.js*/}
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses" />
            <Redirect exact from="/" to="/courses" />
            <Route component={NotFound} />
          </Switch>
        </div>
    );
  }
}

export default App;
