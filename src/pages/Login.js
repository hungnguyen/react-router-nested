import React from "react";
import { loginSuccess } from "../action/authAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
const Login = ({ loginSuccess }) => {
  let history = useHistory();
  function doLogin() {
    loginSuccess();
    history.push("/");
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={doLogin}>Login</button>
    </div>
  );
};
const mapDispatchToProps = { loginSuccess };
export default connect(null, mapDispatchToProps)(Login);
