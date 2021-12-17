import react,{useState, useEffect} from "react";
import {database, auth} from "../firebase";
import { collection, addDoc, getDocs, query  } from "firebase/firestore"; 

const Tweet = ({ isLoggedIn }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    // Get data
    const getNweets = async () => {
      const q = query(collection(database, "tweet"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      // nweetObj with all the data.
      const nweetObj = {
      ...doc.data(),
      id: doc.id,
      }
      // List them in an array.
      setNweets(prev => [nweetObj, ...prev]);
      });
      };
      useEffect(() => {
      getNweets();
      }, []);


    const onSubmit = (event) => {
      event.preventDefault();
      try {
      async function addTweet() {
      const docRef = await addDoc(collection(database, "tweet"), {
      nweet,
      createdAt: Date.now(),
      });
      }
      addTweet();
      console.log(auth);
      } catch (error) {
      console.error("Error adding document: ", error);
      }
      setNweet("");
    };
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      setNweet(value);
    };
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            value={nweet}
            onChange={onChange}
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
          />
          <input type="submit" value="Nweet" />
        </form>
        <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.nweet}</h4>
          </div>
        ))}
        </div>
      </div>
      
    );
}
export default Tweet;