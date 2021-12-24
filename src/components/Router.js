import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet,
    useNavigate ,
  } from "react-router-dom";

// components imports
import Header from "./Header"
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import Test from './Test';

// routes to different pages
import Home from '../routes/Home';
import Worship from '../routes/Worship';
import Connection from '../routes/Connection';
import Baptism from '../routes/Baptism';
import Student from '../routes/Student';

/* Styled Components */
const Container = styled.div`

  width: 1260px;
  max-width: 1260px;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const CenterContainerParent = styled.div`
  height: 100vh;
  width: 590px;
  @media (max-width: 768px) {
    width: 100%;
  }
  border-right: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;;

`;


const AppRouter = ({ isLoggedIn, userObj }) => {
 
    return (
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn} userObj={userObj} />
          <Container>
            <LeftContainer />
            <CenterContainerParent>
              <Routes>
                <Route path="/" element={
                  <Home userObj={userObj}/>
                } />
                <Route path="/worship" element={
                  <Worship userObj={userObj}/>
                } />
                <Route path="/connection" element={
                  <Connection userObj={userObj}/>
                } />
                <Route path="/baptism" element={
                  <Baptism userObj={userObj}/>
                } />
                <Route path="/student" element={
                  <Student userObj={userObj}/>
                } />
              </Routes>
            </CenterContainerParent>
            <RightContainer />
          </Container>
        </BrowserRouter>
    )
  };
  export default AppRouter;