import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SaddlebackLogo from '../img/SaddlebackLogo.svg';
import { auth, signInWithGoogle, googleProvider, logout } from "../firebase";
import LoginForm from '../small-components/LoginForm';

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

const LoginMessage = styled.div`
  padding: 15px;
  font-size: 15px;
  font-weight: 400;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

const Header = ({ isLoggedIn, userObj }) => {

  // capitalize first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return(
    <ContentHeader>
      <Logo>
        <img src={SaddlebackLogo} alt="Saddleback Logo" />
      </Logo>
      
      <ContentContainer>
        { userObj && <LoginMessage>Welcome, {capitalizeFirstLetter(userObj.displayName)}!</LoginMessage> }

        <LoginForm isLoggedIn={isLoggedIn}/>
      </ContentContainer>
    </ContentHeader>

    )
}
export default Header;