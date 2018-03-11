import React, { PureComponent } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { db } from '../firebase';

class UserDialog extends PureComponent {
  constructor() {
    super();
    this.state = {
      open: true,
      username: '',
      errMsg: '',
    };
  }

  handleChage = (field) => (event) => {
    this.setState({
      [field]: event.target.value,
    });
  }

  handleSubmit = () => {
    if (this.state.username === '') {
      this.setState({
        errMsg: 'Your name cant be empty.',
      });
    } else {
      this.props.setUsername(this.state.username);
      // show board messages after username is inputted
      db.messageAddedListener(this.updateMessages);
      this.setState({
        open: false,
      });
    }
  }

  updateMessages = (data) => {
    const message = {
      id: data.key,
      username: data.val().username,
      message: data.val().message,
      timestamp: data.val().timestamp,
    };
    this.props.addMessage(message);
  }

  render() {
    const actions = [
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <Dialog
          title="User Dialog"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <div style={{ color: 'red' }}>
            {this.state.errMsg}
          </div>
          <TextField hintText="Your Name" onChange={this.handleChage('username')} />
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUsername: (username) => dispatch({ type: 'SET_USERNAME', username }),
  addMessage: (message) => dispatch({ type: 'ADD_MESSAGE', message }),
});

export default connect(null, mapDispatchToProps)(UserDialog);
