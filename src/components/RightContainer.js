import React from 'react';
import styled from "styled-components";
import MemberList from "../small-components/MemberList"

const RightContainerParent = styled.div`
  position: sticky;
  top: 91px;
  left: 0;
  width: 330px;
  max-height: 300px;

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

const TrendBoldText = styled.span`
  font-weight: bold;
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
                <TrendBoldText>New Location for Saddleback LA:</TrendBoldText>
                <p>
                The Auditorium
                14658 Albers St
                Sherman Oaks, CA 91411
                United States
                </p>
              </TrendTitle>
            </TrendContent>
            <TrendContent>
              <TrendTitle>
                <TrendBoldText>Open Small Groups</TrendBoldText>
                <p>LA Small Group Fam</p>
              </TrendTitle>
            </TrendContent>
            <TrendContent>
              <TrendTitle>
                <TrendBoldText>Serving Opportunities</TrendBoldText>
                <p>Baptism</p>
                <p>Connection Center</p>
                <p>Worship Team</p>
              </TrendTitle>
            </TrendContent>
          </TrendContainer>
          <TrendContainer>
            <TrendHeader>
              <TrendHeaderTitle>Events</TrendHeaderTitle>
            </TrendHeader>
            <TrendContent>
              <TrendTitle>
                <TrendBoldText>Christmas Eve Service (Candlelight Evening Service)</TrendBoldText> 
                <p>December 24 | 5:00 pm - 7:00 pm PST </p>
                <p>Place: Los Angeles Church (New Location) | Los Angeles </p> 
              </TrendTitle>
            </TrendContent>
            <TrendContent>
              <TrendTitle>
                <TrendBoldText>Christmas Celebration Service</TrendBoldText> 
                <p>December 26 | 9:00 am - 1:30 pm PST </p>
                <p>Place: Los Angeles Church (New Location) | Los Angeles </p> 
              </TrendTitle>
            </TrendContent>
            <TrendContent>
              <TrendTitle>
                <TrendBoldText>SaddlebackLA Baptism</TrendBoldText> 
                <p>January 16 | 9:00 am - 1:30 pm PST  </p>
                <p>Place: Los Angeles Church (New Location) | Los Angeles </p> 
              </TrendTitle>
            </TrendContent>
          </TrendContainer>
          <MemberList></MemberList>

        </RightContainerParent>
    );
}

export default RightContainer;
