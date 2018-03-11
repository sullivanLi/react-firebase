import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { db } from '../firebase';

class MessageInput extends PureComponent {
  constructor() {
    super();
    this.state = {
      msgInput: '',
    };
  }

  handleChage = (field) => (event) => {
    this.setState({
      [field]: event.target.value,
    });
  }

  handleSubmit = () => {
    if (this.state.msgInput === '') {
      return;
    }
    db.pushMessage(this.props.username, this.state.msgInput);
    this.setState({
      msgInput: '',
    });
  }

  render() {
    return (
      <div>
        <TextField hintText="Say Something" fullWidth={true} value={this.state.msgInput} onChange={this.handleChage('msgInput')} />
        <RaisedButton label="Submit" primary={true} onClick={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.userState.username,
});

export default connect(mapStateToProps)(MessageInput);
