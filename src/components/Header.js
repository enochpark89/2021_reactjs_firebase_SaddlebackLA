import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SaddlebackLogo from '../img/SaddlebackLogo.svg';
import { auth, signInWithGoogle, googleProvider, logout } from "../firebase";

import LoginForm from '../routes/LoginForm';


/* Styled Components */

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

/* Form Test */
const LoginFormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 580px;
  z-index: 10;
  background-color: white;
  border-radius: 20px;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  background-color: ${(props) => (props.current === "true" ? "#1e2125" : "#f8f8f8")};
  border: 1px solid ${(props) => (props.current === "true" ? "#404040" : "#eee")};
`;

// Log out handler
const signOut = () => {
  logout(auth).then(() => {
    console.log("Sign-out successful");
  }).catch((error) => {
    // An error happened.
  });
}


/* Functions */







const Header = ({ isLoggedIn }) => {

const [isShowLogin, setIsShowLogin] = useState(false);

// handle Login Button
const LoginScreen = () => {
  setIsShowLogin(!isShowLogin);
}

  return(
    <>
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
        <MenuLoginButton onClick={LoginScreen}>Google Login</MenuLoginButton>
        <MenuLoginButton>Sign up</MenuLoginButton>
      </LoginMenu>
    )

    }
    </ContentHeader>
    <LoginForm isShowLogin={isShowLogin} isLoggedIn={isLoggedIn}/>
    </>
    )
}
export default Header;