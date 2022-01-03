import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet,
    useNavigate ,
    Navigate,
  } from "react-router-dom";

// firebase import
import {auth } from "../firebase";

// components imports
import Header from "./Header"
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

// routes to different pages
import Home from '../routes/Home';
import Worship from '../routes/Worship';
import Ministry from '../routes/Ministry';
import Fellowship from '../routes/Fellowship';
import Baptism from '../routes/Baptism';
import Discipleship from '../routes/Discipleship';

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
  overflow: auto;
`;


const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} userObj={userObj} refreshUser={refreshUser} />
      <Container>
        <LeftContainer />
        <CenterContainerParent>
          <Routes>
            <Route path="/" element={
              <Home userObj={userObj} isLoggedIn={isLoggedIn}/>
            } />

            <Route path="/worship" element={
              <Worship userObj={userObj} isLoggedIn={isLoggedIn}/>
            } />
            <Route path="/ministry" element={
              <Ministry userObj={userObj} isLoggedIn={isLoggedIn}/>
            } />
            <Route path="/connection" element={
              <Fellowship userObj={userObj} isLoggedIn={isLoggedIn}/>
            } />
            <Route path="/baptism" element={
              <Baptism userObj={userObj} isLoggedIn={isLoggedIn}/>
            } />
            <Route path="/student" element={
              <Discipleship userObj={userObj} isLoggedIn={isLoggedIn}/>
            } />
                <Route
                path="*"
                element={<Navigate to="/" />}
            />
          </Routes>
        </CenterContainerParent>
        <RightContainer />
      </Container>
    </BrowserRouter>
  )
};
  export default AppRouter;