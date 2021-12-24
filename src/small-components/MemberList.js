import React,{useState, useEffect} from "react";
import styled from "styled-components";
import {database} from "../firebase";
import { collection, getDocs  } from "firebase/firestore"; 

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



const LoginForm = () => {
const [isMemberList, setIsMemberList] = useState(false);

const showMemberList = async () => {
    const querySnapshot = await getDocs(collection(database, "tweet"));
    const allMembersArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        displayName: doc.data().displayName,
        email: doc.data().email,
        photoURL: doc.data().photoURL,
    }));
    console.log(allMembersArray);
    // const allMembersArray = querySnapshot.docs.map((queryDocumentSnapshot) => ({
    //   id: queryDocumentSnapshot.id,
    //   displayName: queryDocumentSnapshot.data().displayName,
    //   email: queryDocumentSnapshot.data().email,
    //   photoURL: queryDocumentSnapshot.data().photoURL,
    // }));
    // const filterAllMembersArray = _.uniq(allMembersArray, "email");

    // setAllMembers(filterAllMembersArray);
    // setIsMember(true);
    
    // setIsMemberList(true);
};

    return (
        <>
        <ViewMemberBtn onClick={showMemberList}>Member List</ViewMemberBtn>
        {isMemberList && 
        <LoginFormContainer>

        </LoginFormContainer>
        
        }
        </>
    );
}

export default LoginForm;