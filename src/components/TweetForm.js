import react,{useState, useEffect} from "react";
import styled from "styled-components";
import {v4 as uuidv4 } from 'uuid';

import {database, auth, storage, storageRef} from "../firebase";
import {  ref, uploadString, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  } from 'firebase/firestore';

import Tweets from './Tweets';

const TweetFormContainer = styled.form`
  border-bottom: 1px solid #e6e6e6;
  padding: 15px;
  z-index: 1;

`;
const TweetFormTextContainer = styled.div``;

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
  z-index: 8;
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
  const [attachment, setAttachment] = useState("");

    
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

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl='';

    // Upload a file if the attachment is not empty.
    if (attachment !== "") {
    const fileRef = ref(storage, `${userObj.uid}/${uuidv4()}`);
    // send the file reference to the storage service

    const uploadFile = await uploadString(fileRef, attachment, "data_url");
    attachmentUrl = await getDownloadURL(uploadFile.ref);
    }

      // Add the tweet to the database.
      // Add tweet to firestore
      await addDoc(collection(database, "tweet"), {
        creatorId: userObj.uid,
        displayName: userObj.displayName,
        email: userObj.email,
        createdAt: Date.now(),
        text: tweet,
        photoURL: userObj.photoURL,
        attachmentUrl,
        });

      settweet("");
      setAttachment("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    settweet(value);
  };

  const onFileChange = (event) => {
    
    // extract event.target.files[0] in ES6 syntax.
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      // finished event contain info about the file.
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => { setAttachment("") };

  /* return */
  return (
    <>
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
        <TweetFormSubmit type="submit" value="Comment" />
        <input type="file" accept="image/*" onChange={onFileChange} />
        {attachment ? (
        <div>
          <img src={attachment} width="350px" height="350px" />
          <button onClick={onClearAttachment}>Clear</button>
        </div>
      ) : null}


      </TweetFormContainer>
      {tweets.map((tweet) => (
        <Tweets
        key={tweet.id}
        tweetObj={tweet}
        isOwner={tweet.creatorId === userObj.uid}
      />
      ))}
    </>
  );
}
export default TweetForm;