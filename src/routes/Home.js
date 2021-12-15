import React from "react";
import styled from "styled-components";
import SaddlebackLogo from '../img/SaddlebackLogo.svg';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";

// Components
import Terms from '../components/Terms';
import Test from '../components/Test';


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
<>
<Header>
    <Logo>
      <img src={SaddlebackLogo} alt="React Logo" />
    </Logo>
    <LoginSection>
        <MenuLoginButton>Login</MenuLoginButton>
        <MenuLoginButton>Sign Up</MenuLoginButton>
    </LoginSection>
</Header>
    <Container>
    <BrowserRouter>
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
    </BrowserRouter>

        <RightContainerParent>3 </RightContainerParent>
    </Container>
    </>
);
}
export default Home;