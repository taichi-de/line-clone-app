import { Input } from "@mui/material";
import React, { useState } from "react";
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import SendIcon from "@mui/icons-material/Send";

function SendMessage() {
    const [message, setMessage] = useState('');

    function sendMessage(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const user = auth.currentUser;

        if(user) {
            const {uid, photoURL} = user;

            db.collection("messages").add({
                text: message,
                photoURL,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });

            setMessage("");
        }
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
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
                    <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
                </div>
            </form>
        </div>
    );
}

export default SendMessage;