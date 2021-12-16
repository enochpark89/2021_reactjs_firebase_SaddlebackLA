import React, { useState, useEffect} from 'react';
import styled from "styled-components";
// Components
import Test from '../components/Test';
import {
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate ,
} from "react-router-dom";

// Testing Firebase
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {firebaseapp, auth, googleProvider} from '../firebase';

// Header section
const Header = styled.header`
   color: white;
   width: 100%;
   height: auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid #e6e6e6;
`;

// Three sections in the Container

const Container = styled.div`
  width: 1260px;
  max-width: 1260px;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

// Left Container
const LeftContainerParent = styled.div`
  width: 280px;
  height: 500px;
  @media (max-width: 768px) {
    display: none;
  }
  border-right: 1px solid #e6e6e6;
  padding: 10px 10px;
`;

const NavLink = styled(Link)`
    color: black;
`;


const CenterContainerParent = styled.div`
  width: 590px;
  @media (max-width: 768px) {
    width: 100%;
  }
  border-right: 1px solid #e6e6e6;
  padding: 10px 10px;
`;

const RightContainerParent = styled.div`
  width: 330px;

  @media (max-width: 768px) {
    display: none;
  }
  padding: 10px 10px;
`;
const Home = () => {

return(
<Container>
  <LeftContainerParent>
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>    
    <li>
      <Link to="/teams">Teams</Link>
    </li>  
  </div>   
  </LeftContainerParent>
  <CenterContainerParent>
      <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/teams" element={
              <Test />
          } />
      </Routes>
  </CenterContainerParent>
  <RightContainerParent>3 </RightContainerParent>
</Container>
);
}
export default Home;