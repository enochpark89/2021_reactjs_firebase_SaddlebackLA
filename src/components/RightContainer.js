import React from 'react';
import styled from "styled-components";


const RightContainerParent = styled.div`
  position: sticky;
  top: 91px;
  left: 0;
  width: 330px;
  max-height: 400px;

  @media (max-width: 768px) {
    display: none;
  }
  padding: 20px;
  padding-top: 50px;
`;

const RightContainer = () => {

    return (
        <RightContainerParent>This is RightContinerParent </RightContainerParent>
    );
}

export default RightContainer;
