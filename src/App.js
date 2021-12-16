import React,{useState, useEffect} from "react";
import Home from "./routes/Home";
import GlobalStyle from './theme/GlobalStyle';
import Router from "./components/Router";
import {auth} from "./firebase";

function App() {

// Check if user is logged in or not.
const [isLoggedIn, setIsLoggedIn] = useState(false);

// Monitor user's loggability.
useEffect(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
      console.log("User is logged in");
    } else {
      setIsLoggedIn(false);
      console.log("User is logged out");
    }
  });
}, []);

  return (
  <>
  <GlobalStyle></GlobalStyle>
  {/* Send props to the Router about whether the user is logged in or not */}
  <Router isLoggedIn={Boolean(isLoggedIn)}
/>
  </>
  );
}

export default App;