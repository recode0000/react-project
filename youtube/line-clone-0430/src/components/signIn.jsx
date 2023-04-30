import { Button } from '@mui/material';
import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from "../firebase.js";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <Button onClick={signInWithGoogle}>グーグルでログインする</Button>
    </>
  )
}

export default SignIn;