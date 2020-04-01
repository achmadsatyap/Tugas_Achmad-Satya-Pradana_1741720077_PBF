import React, { Component } from 'react';
import { Nav, Navbar } from "react-bootstrap";
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  useHistory,
  useLocation,
  Redirect
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Post</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link ><AuthButton /></Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Post />
            </Route>
            <PrivateRoute path="/home">
              <HomePage />
            </PrivateRoute>
            <Route exact path="/Login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
function Post() {
  return (
    <div>
      <h2>Welcome...!!!</h2>
    </div>
  );
}
function HomePage() {
  return (

    <div>
      <PostForm />

      <AllPost />
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome{" Satya "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
      <p>Anda Belom Login.</p>
    );
}



function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function Login() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };



  return (
    <div className="container">
      <h1>Anda Harus Login terlebih Dahulu untuk Post</h1>
      <button onClick={login}
        style={{ marginTop: "25px" }}
        className="btn btn-success"
      >Log in</button>
    </div>
  );
}
export default App;