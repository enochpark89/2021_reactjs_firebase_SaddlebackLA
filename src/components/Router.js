import React, { useState } from "react";
import {
    BrowserRouter,
  } from "react-router-dom";
import Home from "../routes/Home";
import Header from "./Header"
import styled from "styled-components";


const AppRouter = ({ isLoggedIn }) => {
 
    return (
        <BrowserRouter>
            <Header isLoggedIn={isLoggedIn}
/>
            <Home />
        </BrowserRouter>
    )
  };
  export default AppRouter;