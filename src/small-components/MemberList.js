import React,{useState, useEffect} from "react";
import styled from "styled-components";
import {database} from "../firebase";
import { collection, getDocs  } from "firebase/firestore"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import userImage from "../img/user.png";


const LoginFormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 580px;
  background-color: white;
  border-radius: 20px;
 
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  background-color: #f8f8f8;
  border: 1px solid #eee;
  z-index: 10;
`;

const ViewMemberBtn = styled.button`

  background-color: #f8f8f8;
  border-radius: 20px;
  padding: 20px 0px;
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  &:hover {
    background: #e6e6e6;
  }
  &:active {
    background: #222f3e;
    color:white;
  }
`

const CloseButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 12px;
  left: 90%;
  font-size: 32px;
  cursor: pointer;
  color: #ff7675;

  &:hover {
    color: #e74c3c};
  }
`;

const LoginFormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 35px;
  align-items: flex-start;
`;



const PostingTweetFollowerContainer = styled.div`
  margin: 22px;
`;

const PostingTweetTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const PostingTweetFollower = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

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

const MemberName = styled.h2`
  font-size: 17px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const MemberEmail = styled.h3`
  font-size: 16px;
  color: gray;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const PostingTweetContent = styled.div`
  width: 100%;
`;

const LoginForm = () => {
  const [isMemberList, setIsMemberList] = useState(false);
  const [memberList, setMemberList] = useState([]);

  const showMemberList = async () => {
      const querySnapshot = await getDocs(collection(database, "homecomments"));
      const allMembersArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          displayName: doc.data().displayName,
          email: doc.data().email,
          photoURL: doc.data().photoURL,
      }));

      let duplicates = [];
      let arr = allMembersArray.filter(function(item) {
        
        if (duplicates.indexOf(item.email) === -1) {
          duplicates.push(item.email);
          return true;
        }
        return false;
      });
      setMemberList(arr);
      setIsMemberList(true);
  };

  // close member list
  const onClose = () => {
    setIsMemberList(false);
  };
    return (
        <>
        <ViewMemberBtn onClick={showMemberList}>Member List</ViewMemberBtn>
        {isMemberList ? (
          <LoginFormContainer>
            <CloseButton icon={faTimesCircle} type="button" onClick={onClose}></CloseButton>
            <PostingTweetFollowerContainer>
              <PostingTweetTitle>Church Member List</PostingTweetTitle>
              {memberList &&
                memberList.map((tweetObject, index) => (
                  <PostingTweetFollower key={index}>
                    <PostingTweetAuthorImage src={tweetObject.photoURL ? tweetObject.photoURL : userImage}></PostingTweetAuthorImage>
                    <PostingTweetContent>
                      <PostingTweetAuthor>
                          <MemberName>{tweetObject.displayName}</MemberName>
                          <MemberEmail>{tweetObject.email}</MemberEmail>
                      </PostingTweetAuthor>
                    </PostingTweetContent>
                  </PostingTweetFollower>
                ))}
            </PostingTweetFollowerContainer>

          </LoginFormContainer>
        ) : null}
        </>
    );
}

export default LoginForm;