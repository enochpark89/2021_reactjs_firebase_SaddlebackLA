import React, { useState } from "react";
import { database } from "../firebase";
import { doc, deleteDoc, updateDoc }from"firebase/firestore";

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
    <div>
      {editing ? (
        <>
          <form onSubmit={onUpdateSubmit}>
            <input
              type="text"
              placeholder="Edit your tweet"
              value={newtweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update tweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{tweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete tweet</button>
              <button onClick={toggleEditing}>Edit tweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Tweets;