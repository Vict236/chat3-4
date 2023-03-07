import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import firebase from "firebase/app";
import { storeDB } from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

function Main() {

  const navigate = useNavigate(); 

  const [users, setUsers] = useState([]);
  const [allUsersReady, setAllUsersReady] = useState(false)

  const user = useSelector(state => state.quiz.user);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        navigate("/")
      } 
    });
  }, [firebase.auth()])

  useEffect(() => {
    storeDB.collection("users").onSnapshot((querySnapshot) => {
      const usersArr = []
      querySnapshot.forEach((doc) => {
        usersArr.push(doc.data())
      }) 
      setUsers(usersArr)
    })
  }, [])
  
  useEffect(() => {
    window.addEventListener('unload', () => {
      if (firebase.auth().currentUser) {
        dispatch(cancelStartQuiz({user: firebase.auth().currentUser.uid}))
}})
    return () => {
      window.removeEventListener('unload', () => {
        if (firebase.auth().currentUser) {
          dispatch(cancelStartQuiz({user: firebase.auth().currentUser.uid}))
  }})
    }
  }, [])
  
  useEffect(() => {
    const readyUsers = users.filter(user => user.userReadiness === true)
    if ( readyUsers.length === users.length && readyUsers.length > 0) {
      setAllUsersReady(true)
    }
  }, [users])


  return (
    <Container>
       {!firebase.auth().currentUser && <Navigate to="/" />}
       {allUsersReady === true ? <Quiz /> : user.userReadiness  === true ? <ReadyForQuiz /> : <StartQuiz />}
      <Chat />
    </Container>
  )
}

export { Main }