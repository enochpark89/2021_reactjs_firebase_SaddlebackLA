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

const TrendContainer = styled.div`
  background-color: ${(props) => (props.current === "true" ? "#1e2125" : "#f8f8f8")};
  border-radius: 20px;
  padding: 20px 0px;
  margin-top: 15px;
`;

const TrendHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TrendContent = styled.div``;

const TrendHeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 17px;
`;

const TrendTitle = styled.h1`
  font-size: 16px;
  margin-top: 5px;
  margin-left: 17px;

`;

const RightContainer = () => {

    return (
        <RightContainerParent>
            <TrendContainer>
              <TrendHeader>
                <TrendHeaderTitle>News</TrendHeaderTitle>
              </TrendHeader>
              <TrendContent>
                <TrendTitle>
                  testing testing
                </TrendTitle>
              </TrendContent>
            </TrendContainer>
            <TrendContainer>
              <TrendHeader>
                <TrendHeaderTitle>Events</TrendHeaderTitle>
              </TrendHeader>
            </TrendContainer>
            <TrendContainer>
              <TrendHeader>
                <TrendHeaderTitle>Members</TrendHeaderTitle>
              </TrendHeader>

            </TrendContainer>
        </RightContainerParent>
    );
}

export default RightContainer;
