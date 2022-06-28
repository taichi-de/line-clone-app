import React, {useState,useEffect} from 'react';
import SignOut from './SignOut';
import SendMessage from './SendMessage';
import {db, auth} from "../firebase";

function Line() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection("messages")
            .orderBy("createdAt")
            .limit(50)
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
    },[])
    return (
        <div>
            <SignOut/>
            <div className="msgs">
                {messages.map(({id, text, photoURL, uid})=>(
                    <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
                        <img src={photoURL} alt="icon" />
                        <p>{text}</p>
                    </div>
                ))}
            </div>
            <SendMessage />
        </div>
    )
}

export default Line