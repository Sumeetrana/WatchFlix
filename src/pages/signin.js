import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContiner } from "../containers/footer";
import { AuthForm } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <AuthForm>
          <AuthForm.Title>Sign In</AuthForm.Title>
          {error ? <AuthForm.Error>{error}</AuthForm.Error> : null}
          <AuthForm.Base onSubmit={handleSignIn} method="POST">
            <AuthForm.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <AuthForm.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <AuthForm.Submit disabled={isInvalid} type="submit">
              Sign In
            </AuthForm.Submit>
          </AuthForm.Base>
          <AuthForm.Text>
            New to Watchflix?{" "}
            <AuthForm.Link to="/signup">Signup now</AuthForm.Link>
          </AuthForm.Text>
          <AuthForm.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot. Learn more.
          </AuthForm.TextSmall>
        </AuthForm>
      </HeaderContainer>
      <FooterContiner />
    </>
  );
}
