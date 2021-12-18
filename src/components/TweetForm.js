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
  where,
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
  background-color: ${(props) => (props.current === "true" ? "#1e2125" : "#f8f8f8")};

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
  border-radius: 15px;
  font-size: 15px;
  font-weight: bold;
  background-color: #00AFF0;
  margin-left: auto;
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
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
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
        <div>
        {tweets.map((tweet) => (
          <Tweets
          key={tweet.id}
          tweetObj={tweet}
          isOwner={tweet.creatorId === userObj.uid}
        />
        ))}
        </div>
      </div>
      
    );
}
export default TweetForm;