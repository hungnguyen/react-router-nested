import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
function PrivateRoute({ auth, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = (state) => ({
  auth: state,
});

export default connect(mapStateToProps)(PrivateRoute);
