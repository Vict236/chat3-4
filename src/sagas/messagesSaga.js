import { call, put } from 'redux-saga/effects'
import { database } from '../firebase'
import { takeLatest } from 'redux-saga/effects';
import { getDataMessages, setErrorMessages } from '../store/messagesSlice';
import { updateMessagesArr } from '../store/messagesSlice';

function* fetchMessages() {
    try {
        var messagesRef = database.ref('messages/');
        var messages = yield call(function () {
            return new Promise(function (resolve) {
                messagesRef.on('value', (snapshot) => {
                    var data = snapshot.val()
                    resolve(data !== null ? data : [])
                })
            })
        })
        yield put(getDataMessages({messages: messages}))
    }

    catch (error) {
        yield put(setErrorMessages({error: "Error loading Messages collection data from Realtime Database"}));
    }
}



 function* watchSend() {
    yield takeLatest(updateMessagesArr, fetchMessages);
  }
  

export  {fetchMessages, watchSend}