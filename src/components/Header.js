import React from "react";
import styled from "styled-components";
import SaddlebackLogo from '../img/SaddlebackLogo.svg';
import { auth, signInWithGoogle, googleProvider, logout } from "../firebase";


const ContentHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  border-bottom: 1px solid ${(props) => (props.current === "true" ? "#1e2125" : "#eee")};
  background-color: white;
`;

const Logo = styled.div`
height: 20%;
width: 20%;
`;


const LoginMenu = styled.div``;

const MenuLoginButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 12px;
  color: white;
  border-radius: 30px;
  font-size: 13px;
  font-weight: bold;
  background-color: var(--twitter-color);
  margin-right: 5px;

  &:hover {
    background-color: var(--twitter-dark-color);
  }
`;

// Log out handler
const signOut = () => {
  logout(auth).then(() => {
    console.log("Sign-out successful");
  }).catch((error) => {
    // An error happened.
  });
}


const googleLogin = () => {
  
  // sign up user using Google Account with a pop up.
  signInWithGoogle()
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = googleProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


const Header = ({ isLoggedIn }) => {
    return(
    <ContentHeader>
    <Logo>
      <img src={SaddlebackLogo} alt="Saddleback Logo" />
    </Logo>

    {isLoggedIn ? (
      <LoginMenu>
      <MenuLoginButton onClick={signOut}>Log out</MenuLoginButton>
      </LoginMenu>
    ) : (
      <LoginMenu>
      <MenuLoginButton onClick={googleLogin}>Google Login</MenuLoginButton>
      <MenuLoginButton>Sign up</MenuLoginButton>
    </LoginMenu>
    )

    }

    </ContentHeader>
    )
}
export default Header;