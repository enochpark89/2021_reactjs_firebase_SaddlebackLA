import React, { useState } from "react";
import {
    BrowserRouter,
  } from "react-router-dom";
import Home from "../routes/Home";
import TestHeader from "./TestHeader"

const AppRouter = ({ isLoggedIn }) => {
 
    return (
        <BrowserRouter>
            <h1>Hello</h1>
            <TestHeader></TestHeader>
            <Home />
        </BrowserRouter>
    )
  };
  export default AppRouter;