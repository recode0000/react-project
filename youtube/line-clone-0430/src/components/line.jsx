import React, { useEffect, useState, useRef } from 'react'
import SignOut from './signOut';
import { auth, db } from "../firebase.js";
import SendMessage from './sendMessage';


function Line() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, [])
  return (
    <>
      <SignOut />
      <div className="msgs">{messages.map(({ id, text, photoURL, uid }) => (
        <div>
          <div key={id}
            className={`msg ${ uid === auth.currentUser.uid ? "sent" : "received"}`}
          >
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
          <SendMessage scroll={scroll} />
          <div ref={scroll}></div>
        </div>
      ))}
      </div>
    </>
  )
}

export default Line