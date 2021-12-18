import React from 'react';
import styled from "styled-components";


const RightContainerParent = styled.div`
  width: 330px;

  @media (max-width: 768px) {
    display: none;
  }
  padding: 10px 10px;
`;

const RightContainer = () => {

    return (
        <RightContainerParent>This is RightContinerParent </RightContainerParent>
    );
}

export default RightContainer;
