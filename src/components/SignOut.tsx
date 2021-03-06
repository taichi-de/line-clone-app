import { Button } from '@mui/material'
import React from 'react'
import {auth} from "../firebase";
import CallIcon from "@mui/icons-material/Call";

function SignOut() {
  return (
    <div className="header">
        <Button
          onClick={()=>auth.signOut()}
          style={{ color: "white", fontSize: "15px" }}
        >
          SignOut
        </Button>
        <h3>{auth.currentUser ? auth.currentUser.displayName : null}</h3>
        <CallIcon />
    </div>
  )
}

export default SignOut