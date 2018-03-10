import React, { PureComponent } from 'react';
import UserDialog from '../components/UserDialog';
import Board from '../components/Board';
import MessageInput from '../components/MessageInput';

class ChatBoard extends PureComponent {
  constructor() {
    super();
    this.state = {
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

  handleUserNameSubmit = (name) => {
    if (name) {
      sessionStorage.setItem('userName', name);
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
        <UserDialog open={this.state.userDialogOpen} handleSubmit={this.handleUserNameSubmit} errMsg={this.state.userDialogErr} />
        <Board messages={this.state.boardMsg} />
        <br />
        <MessageInput handleSubmit={this.handleMsgInputSubmit} handleChage={this.handleChage} value={this.state.msgInput} />
      </div>
    );
  }
}

export default ChatBoard;
