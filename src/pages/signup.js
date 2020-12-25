import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContiner } from "../containers/footer";
import { AuthForm } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignup = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <AuthForm>
          <AuthForm.Title>Sign Up</AuthForm.Title>
          {error && <AuthForm.Error>{error}</AuthForm.Error>}

          <AuthForm.Base onSubmit={handleSignup} method="POST">
            <AuthForm.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <AuthForm.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <AuthForm.Input
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <AuthForm.Submit disabled={isInvalid} type="submit">
              Sign up
            </AuthForm.Submit>
          </AuthForm.Base>
          <AuthForm.Text>
            Already a user?{" "}
            <AuthForm.Link to="/signin">Sign in now.</AuthForm.Link>
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
