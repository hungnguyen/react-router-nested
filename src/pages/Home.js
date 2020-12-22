import React from "react";
import { logoutSuccess } from "../action/authAction";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import PrivateRoute from "../PrivateRoute";
const Login = ({ logoutSuccess }) => {
  return (
    <div>
      <button onClick={logoutSuccess}>Logout</button>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <Switch>
            <PrivateRoute path="/about">
              <About />
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
const mapDispatchToProps = { logoutSuccess };
export default connect(null, mapDispatchToProps)(Login);
