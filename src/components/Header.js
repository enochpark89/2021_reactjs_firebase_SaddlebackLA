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

const Header = ({ isLoggedIn }) => {


  return(
    <ContentHeader>
    <Logo>
      <img src={SaddlebackLogo} alt="Saddleback Logo" />
    </Logo>
    {/* Login Form appears */}
    <LoginForm isLoggedIn={isLoggedIn}/>
    </ContentHeader>

    )
}
export default Header;