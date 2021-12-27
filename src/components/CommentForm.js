import React,{useState, useEffect} from "react";
import styled,{keyframes} from "styled-components";
import {v4 as uuidv4 } from 'uuid';
import {
  addDoc,
  collection,
} from 'firebase/firestore';
import {database, storage} from "../firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

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

/* Error Notification */
const FadeOut = keyframes`
    0% {
        opacity: 1;
    }
    25% {
        opacity: 0.75;
    }
    
    50% {
        opacity: 0.5;
    }
    75% {
        opacity: 0.25;
    }
    100% {
        opacity: 0;
    }
`;
const ErrorNotification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 70px;
  background-color: white;
  border-radius: 20px;
  border: 5px solid #e74c3c;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 33px 33px;
  animation-name: ${FadeOut};
  animation-iteration-count: 1;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`
const ErrorText = styled.div`
  font-size: 20px;
  font-weight: 550;
  color: #e74c3c;
`;



const CommentForm = ({isLoggedIn, currentUser, collectionName}) => {
  const [tweet, settweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const [ showError, setShowError ] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl='';
    if (isLoggedIn) {

      // Upload a file if the attachment is not empty.
      if (attachment !== "") {
      const fileRef = ref(storage, `${currentUser.uid}/${uuidv4()}`);
      // send the file reference to the storage service

      const uploadFile = await uploadString(fileRef, attachment, "data_url");
      attachmentUrl = await getDownloadURL(uploadFile.ref);
      }

        // Add coomments to worshipcomments collection
        addDoc(collection(database, collectionName), {
          creatorId: currentUser.uid,
          displayName: currentUser.displayName,
          email: currentUser.email,
          createdAt: Date.now(),
          text: tweet,
          photoURL: currentUser.photoURL,
          attachmentUrl,
          });
      } else {
        
        onErrorScreen();
      }

      settweet("");
      setAttachment("");
  };

  const onChange = (event) => {
      const {
        target: { value },
      } = event;
      settweet(value);
      console.log(tweet);
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

  const onErrorScreen = () => {
    setShowError(true);
    setTimeout(() =>{setShowError(false)}, 3000);

  };

  return (
    <>
      {showError ? (
      <ErrorNotification>
        <ErrorText>Please log in first to comment</ErrorText>
      </ErrorNotification>
      ): null}
    
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
    </>
  );

}

export default CommentForm;