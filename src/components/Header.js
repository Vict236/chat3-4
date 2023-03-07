import React from "react";
import { Outlet } from "react-router-dom";
import logoQ from "../images/logoQ.png"
import styled from 'styled-components';
import { signOut } from "../firebase";
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { cancelStartQuiz, clearIconsArr } from "../store/quizSlice";



const LogOutButton = styled.button`
  background: none;
  width: 6em;
  margin: 1.5em 2% 0 0;
  height: 1.9em;
  border: 2px solid #56bab7;
  border-radius: 2px;
  color: #56bab7;
  font-family: Roboto;
  font-weight: 300;
`
function Header() {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            document.getElementById('logOutButton').classList.remove('hidden')
        } else {
            document.getElementById('logOutButton').classList.add('hidden')
        }
    });

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(cancelStartQuiz({user: firebase.auth().currentUser.uid}))
        dispatch(clearIconsArr())
        signOut();
    }

    return (
        <>
            <header >
                <div>
                    <img src={logoQ} alt="logoQ" className="logoQ" />
                </div>
                <LogOutButton id="logOutButton" onClick={handleClick}>
                    Logout
                </LogOutButton>

            </header>
            <Outlet />
        </>
    )
}

export { Header }
