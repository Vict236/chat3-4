import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messagesSlice';
import quizReducer from './quizSlice';
import {fetchMessages, watchSend} from '../sagas/messagesSaga';
import { fetchQuiz } from '../sagas/quizSaga';

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: { messages: messagesReducer, quiz: quizReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
 sagaMiddleware.run(fetchMessages)
 sagaMiddleware.run(watchSend)
 sagaMiddleware.run(fetchQuiz)
