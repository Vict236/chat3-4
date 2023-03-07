import { createSlice } from '@reduxjs/toolkit';

import { database } from '../firebase';

const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        messagesArr: [],
        error: '',
    },
    reducers: {
        getDataMessages(state, action) {
            state.messagesArr = action.payload.messages
        },

        sendMessage(state, action) {
        database.ref(`messages/` + new Date().getTime()).set({
            message: action.payload.message,
            user: action.payload.user,
            photoURL: action.payload.photoURL,
            displayName: action.payload.displayName,
        })
        },

        updateMessagesArr() {
        },

        setErrorMessages(state, action) {
            state.error = action.payload.error
            console.log(state.error)
        },
    }
})

export const { sendMessage, getDataMessages, updateMessagesArr, setErrorMessages } = messagesSlice.actions;
export default messagesSlice.reducer;