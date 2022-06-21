import Button from "@mui/material/Button";
import React from 'react'
import firebase from "firebase/compat/app";
import {auth} from "../firebase"

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    const signInWithGithub = () => {
        const provider = new firebase.auth.GithubAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div>
            <Button onClick={signInWithGoogle}>login with Google</Button>
            <Button onClick={signInWithGithub}>login with Github</Button>
        </div>
    )
}

export default SignIn