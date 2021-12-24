import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faMusic, faPlug, faWater, faUserGraduate, faSearch, faArrowCircleUp, faTimes, faUserTag, faUser } from "@fortawesome/free-solid-svg-icons";

const LeftContainerParent = styled.div`
  position: sticky;
  top: 91px;
  left: 0;
  width: 280px;
  max-height: 400px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: right;
  padding-top: 35px;
  padding-left: 5px;
`;

const MenuList = styled(Link)`
  margin-bottom: 8px;
  display: inline-block;
  margin-right: 50px;
  align-items: center;
  padding: 12px 20px;
  border-radius: 50px;
  box-sizing: border-box;
  cursor: pointer;
  &:link {
    color: inherit;
  }
  &:visited {
    color: inherit;
  }
  &:hover {
    background-color: #eeeeee;
  }
  
`;
//${"#1e2125" : "#eeeeee")};

const IconContainer = styled(FontAwesomeIcon)`
  width: 30px !important;
  display: inline-block;
  font-size: 24px;
`;

const IconText = styled.span`
  display: inline-block;
  font-size: 18px;
  margin-left: 20px;
  font-weight: 500;
`;

const LeftContainer = () => {

    return (
        <LeftContainerParent>
        <MenuNav>
          <MenuList to="/">
            <IconContainer icon={faHome}></IconContainer>
            <IconText>HOME</IconText>
          </MenuList>
          <MenuList to="/worship">
            <IconContainer icon={faMusic}></IconContainer>
            <IconText>WORSHIP</IconText>
          </MenuList>    
          <MenuList to="/connection">
            <IconContainer icon={faPlug}></IconContainer>
            <IconText>CONNECTION</IconText>
          </MenuList>   
          <MenuList to="/baptism">
            <IconContainer icon={faWater}></IconContainer>
            <IconText>BAPTISM</IconText>
          </MenuList>   
          <MenuList to="/student">
            <IconContainer icon={faUserGraduate}></IconContainer>
            <IconText>STUDENT</IconText>
          </MenuList>   
        </MenuNav>  
        </LeftContainerParent>
    )

}

export default LeftContainer;