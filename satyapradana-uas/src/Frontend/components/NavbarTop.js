import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    useHistory,
    useLocation,
    Redirect
  } from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { logoutUser, deleteUser } from "../../Backend/components/auth";
import Home from "../../Backend/components/BlogPost";
import { connect } from "react-redux";



class NavbarTop extends Component {

    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
      };

    render() {
        const { isLoggingOut, logoutError } = this.props;
        return (
            <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link to="/">Home </Nav.Link>
                </Nav>
                <Form inline>
                <Button type="submit" variant="outline-primary" onClick={this.handleLogout}>Logout
                {isLoggingOut && <p>Logging Out....</p>}
                {logoutError && <p>Error logging out</p>}
                </Button>
                </Form>
            </Navbar>
           
                <Home />
        
            </React.Fragment>
        );
    }
}
// function HomePage() {
//     return (
  
//       <div>
//        <Home/>
//       </div>
//     );
//   }
  function mapStateToProps(state) {
    return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError,
    };
}

export default connect(mapStateToProps)(NavbarTop);
