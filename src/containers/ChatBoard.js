import React, { PureComponent } from 'react';
import UserDialog from '../components/UserDialog';
import Board from '../components/Board';

class ChatBoard extends PureComponent {
  constructor() {
    super();
    this.state = {
      userDialogOpen: true,
      userDialogErr: '',
      boardMsg: []
    };
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

  render() {
    return (
      <div>
        <UserDialog open={this.state.userDialogOpen} handleSubmit={this.handleUserNameSubmit} errMsg={this.state.userDialogErr} />
        <Board messages={this.state.boardMsg} />
      </div>
    );
  }
}

export default ChatBoard;
