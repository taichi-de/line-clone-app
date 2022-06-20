import { Button } from '@mui/material'
import React from 'react'
import firebase from "firebase/combpat/app";
import {auth} from "../firebase"

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <div>
            <Button onClick={signInWithGoogle}>login with Google</Button>
        </div>
    )
}

export default SignIn