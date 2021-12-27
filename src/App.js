import React,{useState, useEffect} from "react";
import GlobalStyle from './theme/GlobalStyle';
import Router from "./components/Router";
import {auth} from "./firebase";

function App() {

// Create loading screen
const [init, setInit] = useState(false);
// Check if user is logged in or not.
const [isLoggedIn, setIsLoggedIn] = useState(false);
// User object state
const [userObj, setUserObj] = useState(null);

// Monitor user's loggability.
useEffect(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
      // Set user object state (current logged in user).
      setUserObj(user);
    } else {
      setIsLoggedIn(false);
    }
  });
}, []);


// Bugfix#1: Refresh userObj in parts.
// refresh the user object in parts so that other pages would refresh itself.

const refreshUser = () => {
  const user = auth.currentUser;
  setUserObj({
    displayName: user.displayName,
    uid: user.uid,
    updateProfile: (args) => user.updateProfile(args),
  });
};

  return (
    <>
      <GlobalStyle></GlobalStyle>
      {/* Send props to the Router about whether the user is logged in or not */}
      <Router 
      isLoggedIn={Boolean(isLoggedIn)}
      userObj={userObj}
      refreshUser={refreshUser}
      />
    </>
  );
}

export default App;