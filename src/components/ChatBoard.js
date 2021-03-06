import React, { PureComponent } from 'react';
import UserDialog from './UserDialog';
import Board from './Board';
import MessageInput from './MessageInput';
import { connect } from 'react-redux';

class ChatBoard extends PureComponent {
  render() {
    return (
      <div>
        <UserDialog />
        <Board />
        <br />
        Hi, {this.props.username}
        <br />
        <MessageInput />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.userState.username,
});

export default connect(mapStateToProps)(ChatBoard);
