import React, { useState } from "react";
import { database } from "../firebase";
import { doc, deleteDoc, updateDoc }from"firebase/firestore";
import styled from "styled-components";
import userImage from "../img/user.png";

const TweetsContainer = styled.div`
  border-bottom: 1px solid #e6e6e6;
  padding: 15px;
  display:flex;
`;

const PostingTweetAuthorImage = styled.img`
  width: 47px;
  height: 47px;
  border-radius: 50%;
  margin-right: 17px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

const PostingTweetAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const AuthorName = styled.h2`
  font-size: 17px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const AuthorEmail = styled.h3`
  font-size: 16px;
  margin-left: 7px;
  color: gray;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const AuthorCreatedAt = styled.h4`
  font-size: 14px;
  color: gray;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const AuthorDot = styled.span`
  font-size: 15px;
  margin: 0 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const PostingTweetContent = styled.div`
  width: 100%;
`;

const PostingTweetDesc = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 1.5;
`;


const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 12px;
  color: white;
  border-radius: 30px;
  font-size: 13px;
  font-weight: bold;
  background-color: var(--twitter-color);
  margin-right: 7px;

  &:hover {
    background-color: var(--twitter-dark-color);
  }
`;


// Update form
const TweetFormContainer = styled.form`
`;


const TweetFormTextInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 12px 0px;
  padding-left: 4px;
  padding-right: 30px;
  padding-bottom: 13px;
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
  font-size: 13px;
  font-weight: bold;
  background-color: var(--twitter-color);
  margin-right: 7px;
  &:hover {
    background-color: var(--twitter-dark-color);
  }
`;

const Tweets = ({ tweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newtweet, setNewtweet] = useState(tweetObj.text);
 
  // Literal
  const tweetTextRef =doc(database, "tweet", `${tweetObj.id}`);


  // Delete handler - ask user - delete from db.
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this tweet?");
    if (ok) {
        await deleteDoc(tweetTextRef );
    }
  };
  
  const toggleEditing = () => setEditing((prev) => !prev);
  
  const onUpdateSubmit = async (event) => {
    event.preventDefault();
    await updateDoc(tweetTextRef, {
        text: newtweet,
        });
    setEditing(false);
  };
  
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewtweet(value);
  };


  
  return (

    <TweetsContainer>
      <PostingTweetAuthorImage src={tweetObj.photoURL ? tweetObj.photoURL : userImage}></PostingTweetAuthorImage>
      <PostingTweetContent>
        <PostingTweetAuthor>
          <AuthorInfo>
            <AuthorName>{tweetObj.displayName}</AuthorName>
            <AuthorEmail>{tweetObj.email}</AuthorEmail>
            <AuthorDot>·</AuthorDot>
            <AuthorCreatedAt>{tweetObj.createdAt}</AuthorCreatedAt>
          </AuthorInfo>
        </PostingTweetAuthor>

        
        { editing ? (

          <>
            <TweetFormContainer onSubmit={onUpdateSubmit}>
              <TweetFormTextInput
                type="text"
                placeholder={tweetObj.text}
                value={newtweet}
                required
                onChange={onChange}
              />
              <TweetFormSubmit type="submit" value="Update" />
              <Button onClick={toggleEditing}>Cancel</Button>
            </TweetFormContainer>
            
          </>
        ) : (
          <>
            <PostingTweetDesc>{tweetObj.text}</PostingTweetDesc>
            <Button onClick={onDeleteClick}>Delete</Button>
            <Button onClick={toggleEditing}>Edit</Button>
          </>
        )}
        

      </PostingTweetContent>
    </TweetsContainer>
   
  );
};

export default Tweets;