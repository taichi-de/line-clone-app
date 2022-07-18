import {useState,useEffect} from 'react';
import SignOut from './SignOut';
import SendMessage from './SendMessage';
import {db, auth} from "../firebase";

function Line() {
    const [messages, setMessages] = useState([] as any);

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
                {messages.map(({id, text, photoURL, uid}: {id: number, text: string, photoURL: string, uid: string})=>(
                    <div key={id} className={
                        `msg ${auth.currentUser ?
                            uid === auth.currentUser.uid ?
                             "sent" : "received"
                            : null}
                    `}>
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