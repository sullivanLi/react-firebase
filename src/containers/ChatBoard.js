import React, { PureComponent } from 'react';
import UserDialog from '../components/UserDialog';
import Board from '../components/Board';
import MessageInput from '../components/MessageInput';

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

  handleChage = (field) => (event) => {
    this.setState({
      [field]: event.target.value,
    });
  }

  handleUserNameSubmit = () => {
    if (this.state.userName) {
      sessionStorage.setItem('userName', this.state.userName);
      this.setState({
        userDialogOpen: false,
      });
    } else {
      this.setState({
        userDialogErr: 'Your name cant be empty.'
      });
    }
  }

  handleMsgInputSubmit = () => {
    console.log(this.state.msgInput);
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
