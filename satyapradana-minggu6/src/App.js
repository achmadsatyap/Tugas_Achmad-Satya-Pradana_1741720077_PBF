import React from "react";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link ><AuthButton /></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Tokped />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/product">
            <Product />
          </PrivateRoute>

          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>

        <MDBFooter
          color="green"
          variant="green"
          className="font-small fixed-bottom pt-4 mt-4"
        >
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow></MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-1">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a> Shop </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    </Router>
  );
}

function Tokped() {
  return (
    <div>
      <h2>Welcome..!!</h2>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Ini adalah navbar home</h2>
    </div>
  );
}

function Product() {
  return (
    <div className="Product">
      <div className="row">
        <div className={"col-4"}>
          <div className="card">
            <img src={"/img/2.jpeg"} className="card-img-top" />
            <div className="card-body">
              <h3 className="card-text"></h3>
              <p>Rp. 20.000</p>
              <a href="#" className="btn btn-primary">
                Add to cart
              </a>
              <a href="#" className="btn btn-primary">
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb);
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
      <p>You are not logged in.</p>
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
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
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
    <div>
      <p>Silahkan login Terlebih dahulu</p>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;