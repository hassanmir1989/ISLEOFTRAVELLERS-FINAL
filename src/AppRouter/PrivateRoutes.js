import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <div>
    <Route
      {...rest}
      component={props => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/logIn" />;
        }
      }}
    />
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.authReducer.uid
});

export default connect(mapStateToProps)(PrivateRoute);
