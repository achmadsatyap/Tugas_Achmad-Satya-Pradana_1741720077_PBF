import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./Frontend/components/ProtectedRoute";
import Home from "./Backend/components/BlogPost";
import Login from "./Frontend/components/Login";
import Navbar from "./Frontend/components/NavbarTop";
import 'bootstrap/dist/css/bootstrap.min.css'
function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <React.Fragment>
    <Switch>
    <Route path="/login" component={Login} />
    {/* <Navbar/> */}
      <ProtectedRoute
      exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      ></ProtectedRoute>
    </Switch>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App); 