import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import googleLogo from "../img/google-logo.svg";

// firebase imports
import { 
  signInWithGoogle, 
  signInWithEmail,  
  googleProvider, 
  auth, 
  logout, 
  createuser,
  updateprofile,
} from "../firebase";
import {updateProfile} from "firebase/auth";

/* Styled Components*/

/* Form Test */
const LoginFormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 580px;
  background-color: white;
  border-radius: 20px;
 
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  background-color: #f8f8f8;
  border: 1px solid #eee;
  z-index: 10;
`;

const LoginMenu = styled.div``;

const MenuLoginButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 12px;
  color: white;
  border-radius: 7px;
  font-size: 13px;
  font-weight: bold;
  background-color: var(--twitter-color);
  margin-right: 30px;

  &:hover {
    background-color: var(--twitter-dark-color);
  }
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
  width: 77%;
`;

const LoginInputTag = styled.input`
  border: 1px solid #e8e8e8;
  outline: 1px solid #f5f5f5;
  padding: 15px;
  padding-bottom: 10px;
  padding-top: 27px;
  background-color: #e8e8e8;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 5px;
  position: relative;

  &::placeholder {
    font-size: 14px;
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;



const LoginSubmitTag = styled.input`
  border: none;
  outline: none;
  background-color: var(--twitter-color);
  padding: 12px;
  color: white;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 18px;
  cursor: pointer;

`;
const CreateNew = styled.button`
  border: none;
  outline: none;
  background-color: var(--twitter-color);
  padding: 12px;
  color: white;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 12px;
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


/* Social Logins */
const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 77%;
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

const IconGoogle = styled.img`
  width: 19px;
  margin-right: 12px;
  margin-bottom: 1px;
`;

// Notification
const FadeOut = keyframes`
    0% {
        opacity: 1;
    }
    25% {
        opacity: 0.75;
    }
    
    50% {
        opacity: 0.5;
    }
    75% {
        opacity: 0.25;
    }
    100% {
        opacity: 0;
    }
`;

const ErrorNotification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 70px;
  background-color: white;
  border-radius: 20px;
  border: 5px solid #e74c3c;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 33px 33px;
  animation-name: ${FadeOut};
  animation-iteration-count: 1;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`
const ErrorText = styled.div`
  font-size: 20px;
  font-weight: 550;
  color: #e74c3c;
`;



//* The Component *//

const LoginForm = ({ isLoggedIn}) => {
  const [email, setEmail] = useState(""); // 유저 이메일
  const [password, setPassword] = useState(""); // 유저 비밀번호
  const [displayName, setDisplayName] = useState(""); // 유저 닉네임
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowCreate, setIsShowCreate] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  ///* Top Right buttons *///

  // Login button handler
  const LoginScreen = () => {
    setIsShowLogin(!isShowLogin);

  }

  // Log out button handler
  const signOut = () => {
    logout(auth).then(() => {
      console.log("Sign-out successful");
    }).catch((error) => {
      // An error happened.
    });
  }

  ///* Buttons in a Login Form *///

  // close button
  const onClose = () => {
    setIsShowLogin(false);
    setIsShowCreate(false);
  };

  const onErrorScreen = (errorCode) => {
    setShowError(true);
    setError(errorCode);
    setTimeout(() =>{setShowError(false)}, 5000);
  };

  // Sign in with an exisitng account.
  const onLoginSubmit = async (event) => {
    // console.log("Authentication authService.currentUser", authService.currentUser);
    event.preventDefault();
    signInWithEmail(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      onClose();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("ErrorCode: ", errorCode);
      onErrorScreen(errorCode);
    });
  };

  // Sign up with a new account.
  const onClickRegister = async (event) => {
    event.preventDefault();
    
    try {
      await createuser(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: displayName
      })
    }
    catch (error) {
      console.log(error);
    }
    onClose();
  };

  // Create New Account
  const onCreateNew = () => {
    setIsShowCreate(true);
    setIsShowLogin(false);
  }

  // Set the email and passwords when fields are changed.
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
  
  };

  const onGoogleLogin = () => {

      // sign up user using Google Account with a pop up.
      signInWithGoogle()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        onClose();
        const credential = googleProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
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
    



    return (
    <>
      {showError ? (
      <ErrorNotification>
        <ErrorText>{error}</ErrorText>
      </ErrorNotification>
      ): null}

      {isLoggedIn ? (
        <LoginMenu>
          <MenuLoginButton onClick={signOut}>Log out</MenuLoginButton>
        </LoginMenu>
        ) : (
          <LoginMenu>
            <MenuLoginButton onClick={LoginScreen}>Log in</MenuLoginButton>
          </LoginMenu>
        )
      }
      {isShowLogin ? (
        <LoginFormContainer>
          <LoginFormContent>
              <LoginFormTitle>Log in</LoginFormTitle>
              <LoginFormTag onSubmit={onLoginSubmit}>
                <LoginInputTag name="emailInput" type="text" placeholder="Email" onChange={onChange} value={email} required></LoginInputTag>
                <LoginInputTag name="passwordInput" type="password" placeholder="Passwords" onChange={onChange} value={password} required></LoginInputTag>
                <LoginSubmitTag type="submit" onClick={onLoginSubmit} value="Login"></LoginSubmitTag>
              </LoginFormTag>
              <SocialLoginContainer>
                <CreateNew onClick={onCreateNew}>
                Create New
                </CreateNew>
                <GoogleLogin name="googleLogin" type="submit" onClick={onGoogleLogin}>
                  <IconGoogle src={googleLogo}></IconGoogle>
                  Log in with Google
                </GoogleLogin>
              </SocialLoginContainer>
              <CloseButton icon={faTimesCircle} type="button" onClick={onClose}></CloseButton>
          </LoginFormContent>

        </LoginFormContainer> 
      ): null}

      {isShowCreate ? (
        <LoginFormContainer>
          <LoginFormContent>
            <LoginFormTitle>Sign up</LoginFormTitle>
            <LoginFormTag onSubmit={onClickRegister}>
              <LoginInputTag name="displayNameInput" type="text" placeholder="Display Name" onChange={onChange} value={displayName} required></LoginInputTag>
              <LoginInputTag name="emailInput" type="text" placeholder="Email" onChange={onChange} value={email} required></LoginInputTag>
              <LoginInputTag name="passwordInput" type="password" placeholder="Passwords" onChange={onChange} value={password} required></LoginInputTag>
              <LoginSubmitTag type="submit" onClick={onClickRegister} value="Register"></LoginSubmitTag>
            </LoginFormTag>
            <CloseButton icon={faTimesCircle} type="button" onClick={onClose}></CloseButton>

          </LoginFormContent> 
        </LoginFormContainer>
      ): null}
    
    </>  
  );
}

export default LoginForm;