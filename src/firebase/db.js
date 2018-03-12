import { db } from './firebase';
import store from '../store';

export const pushMessage = (username, message) => {
  const data = {
    username: username,
    message: message,
    timestamp: Date.now(),
  }
  db.ref('chatboad').push(data);
}

export const subscribe = () => {
  const { dispatch } = store;
  db.ref('chatboad').on('child_added', (data) => {
    const message = {
      id: data.key,
      username: data.val().username,
      message: data.val().message,
      timestamp: data.val().timestamp,
    };
    dispatch({ type: 'ADD_MESSAGE', message })
  });
}
