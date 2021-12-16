import React from "react";
import styled from "styled-components";

// styles
const Logo = styled.div`
height: 20%;
width: 20%;
padding: 10px;
margin-bottom: 10px;
`;

const LoginSection =styled.div`
margin-right: 10px;
`;

const MenuLoginButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 12px;
  color: white;
  border-radius: 18px;
  font-size: 13px;
  font-weight: bold;
  background-color: var(--twitter-color);
  margin-right: 20px;

  &:hover {
    background-color: var(--twitter-dark-color);
  }
`;

const Header = () => {
// eventListener for login
// const onSocialClick = async (event) => {
//     Check whether it is google or github name
//     const {
//       target: { name },
//     } = event;
  
//     signInWithPopup(auth, googleProvider)
//     .then((result) => {
//       This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       The signed-in user info.
//       const user = result.user;
//       ...
//     }).catch((error) => {
//       Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       The email of the user's account used.
//       const email = error.email;
//       The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       ...
//     });
//   }
  
//   Log out user
//   const onLogOutClick = () => {
//     auth.signOut();
//   };

return (
<Header>
  <LoginSection>
    {/* <span style={{color:"black", margin: "20px"}}>{"Welcome " + auth.currentUser.displayName+"!"}</span> */}
    <MenuLoginButton >Logout</MenuLoginButton>
  </LoginSection>
  
  <LoginSection>
    <MenuLoginButton name="googlelogin">Google Login</MenuLoginButton>
    <MenuLoginButton>Sign Up</MenuLoginButton>
  </LoginSection>
  
</Header>
);
}

export default Header;