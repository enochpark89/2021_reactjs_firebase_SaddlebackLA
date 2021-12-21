import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import googleLogo from "../img/google-logo.svg";

import { signInWithGoogle, googleProvider } from "../firebase";

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

const LoginFormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  padding-top: 45px;
`;

const LoginFormTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const LoginFormTag = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const LoginInputTag = styled.input`
  border: none;
  outline: none;
  padding: 15px;
  padding-bottom: 15px;
  padding-top: 27px;
  background-color: #f5f5f5;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 5px;
  position: relative;

  &:focus {
    background-color: #e8e8e8;
  }

  &::placeholder {
    font-size: 14px;
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;

const ErrorMessage = styled.h3`
  font-size: 13px;
  margin-top: 8px;
  margin-bottom: 12px;
  color: #eb4d4b;
  font-weight: bold;
`;

const LoginSubmitTag = styled.input`
  border: none;
  outline: none;
  background-color: #98cff8;
  padding: 12px;
  color: white;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: var(--twitter-color);
  }
`;


const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

const GoogleLogin = styled.button`
  border: none;
  outline: none;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 11px;
  color: black;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 450;
  cursor: pointer;
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e0e0e0;
  }
`;


const CloseButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 12px;
  left: 90%;
  font-size: 32px;
  cursor: pointer;
  color: #ff7675;

  &:hover {
    color: #e74c3c};
  }
`;

const IconGoogle = styled.img`
  width: 18px;
  margin-right: 5px;
  margin-bottom: 1px;
`;

const LoginForm = ({isShowLogin, isLoggedIn}) => {
    const [email, setEmail] = useState(""); // 유저 이메일
    const [password, setPassword] = useState(""); // 유저 비밀번호
    const [displayName, setDisplayName] = useState(""); // 유저 닉네임
    const [showLoginForm, setshowLoginForm]= useState(isShowLogin); // 로그인 폼 보이기/안보이기;

    
    useEffect(() => {
        // if user is logged in, hide login form
        if (isLoggedIn) {
            setshowLoginForm(false);
        } 
      });

    const onSubmit = async (event) => {
        // console.log("Authentication authService.currentUser", authService.currentUser);
        event.preventDefault();
        console.log(event);
      };

    const onChange = (event) => {
    const {
        target: { name, value },
    } = event;

    if (name === "emailInput") {
        setEmail(value);
    } else if (name === "passwordInput") {
        setPassword(value);
    } else if (name === "displayNameInput") {
        setDisplayName(value);
    }
    console.log("email", email);
    console.log("password", password);
    };

    const onGoogleLogin = () => {
  
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
          const credential = googleProvider.credentialFromError(error);
          // ...
        });
      }
    
    const onClose = () => {
        setshowLoginForm(false);
    };

    console.log("isShowLogin: "+ isShowLogin);
    return (
      <>
      {showLoginForm ? (
      <LoginFormContainer>
        
        <LoginFormContent>
            <LoginFormTitle>Email Login</LoginFormTitle>
            <LoginFormTag onSubmit={onSubmit}>
                <LoginInputTag name="emailInput" type="text" placeholder="이메일" onChange={onChange} value={email} required></LoginInputTag>
                <LoginInputTag name="passwordInput" type="password" placeholder="비밀번호" onChange={onChange} value={password} required></LoginInputTag>
                <LoginSubmitTag type="submit" onClick={onSubmit} value="Login"></LoginSubmitTag>
            </LoginFormTag>
            <SocialLoginContainer>
                <GoogleLogin name="googleLogin" type="submit" onClick={onGoogleLogin}>
                  <IconGoogle src={googleLogo}></IconGoogle>
                  Google Login
                </GoogleLogin>
            </SocialLoginContainer>
        </LoginFormContent>
        <CloseButton icon={faTimesCircle} type="button" onClick={onClose}></CloseButton>

      </LoginFormContainer>
      
      
      ): null}
      </>
    );
}

export default LoginForm;