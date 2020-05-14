import React, { useCallback } from "react";
import { withRouter } from "react-router";
import Firebase from "../../Backend/Firebase/firebase";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await Firebase.auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(
            Firebase.database().ref("user").push({
              email: email.value,
            })
          );
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const back = () => {
    history.push("/login");
  };

  return (
    <div className="Signup">
      <section className="form animated flipInX">
        <h2>Create your Account</h2>
        <form className="loginbox" onSubmit={handleSignUp}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button id="submit">Create Account</button>
        </form>
        <br></br>
        <button id="submit" onClick={back}>
          Back
        </button>
      </section>
    </div>
  );
};

export default withRouter(SignUp);
