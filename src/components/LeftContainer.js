import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const LeftContainerParent = styled.div`
  width: 280px;
  height: 500px;
  @media (max-width: 768px) {
    display: none;
  }
  border-right: 1px solid #e6e6e6;
  padding: 10px 10px;
`;

const LeftContainer = () => {

    return (
        <LeftContainerParent>
        <div>
          <li>
            <Link to="/">TweetTest</Link>
          </li>    
          <li>
            <Link to="/teams">Teams</Link>
          </li>  
        </div>   
        </LeftContainerParent>
    )

}

export default LeftContainer;