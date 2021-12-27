import React,{useState, useEffect} from "react";
import styled from "styled-components";

import {auth} from "../firebase";
import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  } from 'firebase/firestore';

import Comments from '../components/Comments';
import CommentForm from '../components/CommentForm';
import Iframe from 'react-iframe';

/* Styled Components */

const TitleText = styled.h1`
  align-items: center;
  font-size: 24px;
  padding: 33px;
  font-weight: 500;
  background-color: #f5f5f5;
`;


const FrameDiv = styled.div`
  padding: 15px 0px;
`;

const Connection = ({ userObj, isLoggedIn }) => {
    
  const [tweets, settweets] = useState([]);
  const collectionName = 'baptismcomments';
  let currentUser = auth.currentUser;
    
  useEffect(() => {

    // Real time data retrieval
    const q = query(
    collection(getFirestore(), collectionName),
    orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, querySnapshot => {

      const newArray = querySnapshot.docs.map(doc => {
      return {
      id: doc.id,
      ...doc.data(),
      };
      });
    settweets(newArray);
    });
    return () => {
    unsubscribe();
    };
  }, []);

  /* return */
  return (
    <>
      <TitleText>Baptism</TitleText>
      <FrameDiv>
        <Iframe width="100%" height="315" src="https://www.youtube.com/embed/8bPB7RuwafM" allowFullScreen></Iframe>
      </FrameDiv>
      <CommentForm isLoggedIn={isLoggedIn} currentUser={currentUser} collectionName={collectionName}></CommentForm>
      {tweets.map((tweet) => (
        <Comments
        key={tweet.id}
        tweetObj={tweet}
        isOwner={currentUser ? tweet.creatorId === currentUser.uid: false}
        collectionName = {collectionName}
      />
      ))}
    </>
  );
}
export default Connection;