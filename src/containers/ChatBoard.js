import React, { PureComponent } from 'react';
import UserDialog from '../components/UserDialog';
import Board from '../components/Board';
import MessageInput from '../components/MessageInput';
import { db } from '../firebase';

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
  }

  updateMessages = (data) => {
    let chatArray = this.state.boardMsg.slice();
    const item = {
      id: data.key,
      username: data.val().username,
      message: data.val().message,
      timestamp: data.val().timestamp,
    };
    chatArray.unshift(item);
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
      // show board messages after username is inputted
      db.messageAddedListener(this.updateMessages);
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
    db.pushMessage(this.state.userName, this.state.msgInput);
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
