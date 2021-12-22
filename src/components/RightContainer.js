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
  display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: #f8f8f8;
  border-radius: 20px;
  padding: 20px 0px;
  margin-top: 15px;

`;

const TrendHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const TrendContent = styled.div`
border-top: 1px solid #e6e6e6;
&:hover {
    background: #e6e6e6;
  }
`;

const TrendHeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 17px;
`;

const TrendTitle = styled.h1`
  font-size: 16px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 88%;
  height: 100%;
  word-wrap: break-word;


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
                  testing testingdsaadfdasfdsafsdafadsdsdfdasfdasfdsafdsafadsfdsafdsafadsfdafdasfdsafdsafdsa
                </TrendTitle>
              </TrendContent>
              <TrendContent>
                <TrendTitle>
                  testing testingdsaadfdasfdsafsdafadsdsdfdasfdasfdsafdsafadsfdsafdsafadsfdafdasfdsafdsafdsa
                </TrendTitle>
              </TrendContent>
              <TrendContent>
                <TrendTitle>
                  testing testingdsaadfdasfdsafsdafadsdsdfdasfdasfdsafdsafadsfdsafdsafadsfdafdasfdsafdsafdsa
                </TrendTitle>
              </TrendContent>
            </TrendContainer>
            <TrendContainer>
              <TrendHeader>
                <TrendHeaderTitle>Events</TrendHeaderTitle>
              </TrendHeader>
              <TrendContent>
                <TrendTitle>
                  testing testingdsaadfdasfdsafsdafadsdsdfdasfdasfdsafdsafadsfdsafdsafadsfdafdasfdsafdsafdsa
                </TrendTitle>
              </TrendContent>
              <TrendContent>
                <TrendTitle>
                  testing testingdsaadfdasfdsafsdafadsdsdfdasfdasfdsafdsafadsfdsafdsafadsfdafdasfdsafdsafdsa
                </TrendTitle>
              </TrendContent>
              <TrendContent>
                <TrendTitle>
                  testing testingdsaadfdasfdsafsdafadsdsdfdasfdasfdsafdsafadsfdsafdsafadsfdafdasfdsafdsafdsa
                </TrendTitle>
              </TrendContent>
            </TrendContainer>
            <TrendContainer>
              <TrendHeader>
                <TrendHeaderTitle>View Members</TrendHeaderTitle>
              </TrendHeader>

            </TrendContainer>
        </RightContainerParent>
    );
}

export default RightContainer;
