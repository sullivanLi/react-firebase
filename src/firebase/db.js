import { db } from './firebase';

export const pushMessage = (username, message) => {
  const data = {
    username: username,
    message: message,
    timestamp: Date.now(),
  }
  db.ref('chatboad').push(data);
}

export const messageAddedListener = (callback) => {
  db.ref('chatboad').on('child_added', callback);
}
