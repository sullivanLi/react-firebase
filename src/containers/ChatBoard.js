import React, { PureComponent } from 'react';
import UserDialog from '../components/UserDialog';
import Board from '../components/Board';
import MessageInput from '../components/MessageInput';
import * as firebase from 'firebase';

class ChatBoard extends PureComponent {
  constructor() {
    super();
    this.state = {
      userName: '',
      userDialogOpen: true,
      userDialogErr: '',
      boardMsg: [],
      msgInput: ''
    };
    this.chatRef = undefined;
  }

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyC-iWVepLlcEe2RMMNwL_bJtKC6FgKqRr0",
      authDomain: "react-firebase-460e4.firebaseapp.com",
      databaseURL: "https://react-firebase-460e4.firebaseio.com",
      projectId: "react-firebase-460e4",
      storageBucket: "",
      messagingSenderId: "63366833400"
    };
    firebase.initializeApp(config);
    this.chatRef = firebase.database().ref('chatboad');
  }

  getUpdateFromFirebase = (data) => {
    let chatArray = this.state.boardMsg.slice();
    const item = {
      id: data.key,
      username: data.val().username,
      message: data.val().message,
      timestamp: data.val().timestamp,
    };
    chatArray.push(item);
    this.setState({
      boardMsg: chatArray,
    });
  }

  handleChage = (field) => (event) => {
    this.setState({
      [field]: event.target.value,
    });
  }

  handleUserNameSubmit = () => {
    if (this.state.userName) {
      this.setState({
        userDialogOpen: false,
      });
      // retrieve data from firebase
      this.chatRef.on('child_added', this.getUpdateFromFirebase);
    } else {
      this.setState({
        userDialogErr: 'Your name cant be empty.'
      });
    }
  }

  handleMsgInputSubmit = () => {
    if (this.state.msgInput === '') {
      return;
    }
    const data = {
      username: this.state.userName,
      message: this.state.msgInput,
      timestamp: Date.now(),
    }
    this.chatRef.push(data);
    this.setState({
      msgInput: '',
    });
  }

  render() {
    return (
      <div>
        <UserDialog open={this.state.userDialogOpen} handleSubmit={this.handleUserNameSubmit} handleChage={this.handleChage} errMsg={this.state.userDialogErr} />
        <Board messages={this.state.boardMsg} />
        <br />
        Hi, {this.state.userName}
        <br />
        <MessageInput handleSubmit={this.handleMsgInputSubmit} handleChage={this.handleChage} value={this.state.msgInput} />
      </div>
    );
  }
}

export default ChatBoard;
