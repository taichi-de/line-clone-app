import React, {useState} from 'react'
import {db, auth} from "../firebase"
import firebase from "firebase/combpat/app"
import {Input} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"

function SendMessage() {
    const [message, setMessage] = useState();
    function sendMessage(e) {
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;

        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setMessage("");
    }

    return (
        <div>
            <form action="" onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input
                        style={{
                            width: "78%",
                            fontSize: "15px",
                            fontWeight: "550",
                            marginLeft: "5px",
                            marginBottom: "-3px",
                        }}
                        type="text"
                        placeholder="text"
                        onChange={(e)=>setMessage(e.target.value)}
                        value={message}
                    />
                    <SendIcon />
                </div>
            </form>
        </div>
    )
}

export default SendMessage