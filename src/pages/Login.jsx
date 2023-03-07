import React, { useEffect } from "react";
import firebase from "firebase/app";
import { signIn } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


function Login() {
  
  const handleClick = () => {
    signIn();
  }

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({user: firebase.auth().currentUser.uid})
        navigate("/main")
      } else {
        console.log("user is signed out");
      }
    });
  }, [firebase.auth()])

  return (
    <Log>
      <LogButton placeholder="Login with Google" 
      onClick={handleClick}>
        <Text>Login with Google</Text>
      </LogButton>
    </Log>
  )
}

export { Login }