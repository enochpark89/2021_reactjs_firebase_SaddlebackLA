import react,{useState, useEffect} from "react";
import styled from "styled-components";

import {database, auth} from "../firebase";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  getDoc,
  } from 'firebase/firestore';

import Tweets from './Tweets';

const TweetFormContainer = styled.form`
  border-bottom: 1px solid #e6e6e6;
  padding: 15px;

`;
const TweetFormTextContainer = styled.div`
  position: relative;

`;
const TweetFormTextInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 12px 0px;
  padding-left: 4px;
  padding-right: 30px;
  padding-bottom: 18px;
  margin-bottom: 15px;
  box-sizing: border-box;
  font-size: 18px;
  border-radius: 4px;
  color: #989898;
  background-color: #f8f8f8;

  &::placeholder {
    color: #989898;
  }
`;


const TweetFormSubmit = styled.input`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 15px;
  color: white;
  border-radius: 30px;
  font-size: 15px;
  font-weight: bold;
  background-color: var(--twitter-color);
  margin-right: 5px;

  &:hover {
    background-color: var(--twitter-dark-color);
  }
`;

const TweetForm = ({ userObj }) => {
    
    const [tweet, settweet] = useState("");
    const [tweets, settweets] = useState([]);

    
useEffect(() => {

  // Real time data retrieval
  const q = query(
  collection(getFirestore(), 'tweet'),
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

    const onSubmit = (event) => {
      event.preventDefault();
      try {
      async function addTweet() {
      const docRef = await addDoc(collection(database, "tweet"), {
      creatorId: userObj.uid,
      displayName: userObj.displayName,
      email: userObj.email,
      createdAt: Date.now(),
      text: tweet,
      photoURL: userObj.photoURL,
      });
      }
      addTweet();
      } catch (error) {
      console.error("Error adding document: ", error);
      }
      settweet("");
    };

    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      settweet(value);
    };
    
    return (
      <div>
        <iframe width="100%" height="700px" src="https://docs.google.com/document/d/e/2PACX-1vTfC44GWS-3sVnzKe8-qJT0C8Z-18KueGYXB_ySSVG18clwCijyNL3R1saGqTzsZj1AmwpDsS6YxDDm/pub?embedded=true"></iframe> 
        <TweetFormContainer onSubmit={onSubmit}>
          <TweetFormTextContainer>
            <TweetFormTextInput
              type="text"
              placeholder="Write a comment"
              value={tweet}
              onChange={onChange}
              maxLength={100}
              required
            ></TweetFormTextInput>
          </TweetFormTextContainer>
          <TweetFormSubmit type="submit" value="tweet" />
        </TweetFormContainer>
        {tweets.map((tweet) => (
          <Tweets
          key={tweet.id}
          tweetObj={tweet}
          isOwner={tweet.creatorId === userObj.uid}
        />
        ))}
        </div>
      
    );
}
export default TweetForm;