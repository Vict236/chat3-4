import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, updateMessagesArr } from "../store/messagesSlice";
import firebase from "firebase/compat/app";
import { database } from '../firebase'
import {
  ChatBack, ChatMessages, MessageContainer, UserInfo,
  Message, Photo, SendMessageContainer,
  ChatTextarea, SendButton
} from "../styled-components/chatStyle";



function Chat() {

  const [message, setMessage] = useState();
  const [data, setData] = useState();
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const messagesRef = database.ref('messages/');
    messagesRef.on('value', (snapshot) => {
      const data = snapshot.val();
      setData(data)
    });
  }, [])

  useEffect(() => {
    dispatch(updateMessagesArr(data))
  }, [data])

  const messages = useSelector(state => state.messages.messagesArr);

  const send = () => {
    dispatch(sendMessage({
      message: message,
      user: firebase.auth().currentUser.uid,
      photoURL: firebase.auth().currentUser.photoURL,
      displayName: firebase.auth().currentUser.displayName,
    })
    )
    inputRef.current.value = "";
  }


  return (

    <ChatBack>

      {firebase.auth().currentUser !== null &&
        <ChatMessages>
          {messages && Object.entries(messages).map(message =>
            <MessageContainer position={message[1].user === firebase.auth().currentUser.uid ? "right" : "left"}
              key={message[0]}>
              <UserInfo>
                <Photo src={message[1].photoURL} />
                <p>{message[1].displayName}</p>
              </UserInfo>
              <Message >{message[1].message}</Message>
            </MessageContainer>)}
        </ChatMessages>
      }

      <SendMessageContainer>
        <ChatTextarea ref={inputRef} placeholder="Send a message..."
          onChange={(e) => { setMessage(e.target.value) }} onKeyDown={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              send();
            }
          }} />

        <SendButton onClick={send} >
          SEND
        </SendButton>
      </SendMessageContainer>

    </ChatBack>
  )
}

export default Chat