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
import Test from '../components/Test';
import TweetForm from './TweetForm';

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
  width: 590px;
  @media (max-width: 768px) {
    width: 100%;
  }
  border-right: 1px solid #e6e6e6;;
`;


const AppRouter = ({ isLoggedIn, userObj }) => {
 
    return (
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn} />
          <Container>
            <LeftContainer />
            <CenterContainerParent>
              <Routes>
                <Route path="/" element={
                  <TweetForm userObj={userObj}/>
                } />
                <Route path="/teams" element={
                  <Test />
                } />
              </Routes>
            </CenterContainerParent>
            <RightContainer />
          </Container>
        </BrowserRouter>
    )
  };
  export default AppRouter;