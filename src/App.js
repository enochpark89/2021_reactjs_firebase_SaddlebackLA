import React,{useState, useEffect} from "react";
import Home from "./routes/Home";
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
      setInit(true);
    } else {
      setIsLoggedIn(false);
    }
  });
}, []);

  return (
  <>
  <GlobalStyle></GlobalStyle>
  {/* Send props to the Router about whether the user is logged in or not */}
  {init ? (
      <Router isLoggedIn={Boolean(isLoggedIn)} userObj={userObj}
      />
      ) : (
        "Initializing..."
      )}

  </>
  );
}

export default App;