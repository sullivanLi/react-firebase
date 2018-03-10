import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const MessageInput = (props) => (
  <div>
    <TextField hintText="Say Something" fullWidth={true} value={props.value} onChange={props.handleChage('msgInput')} />
    <RaisedButton label="Submit" primary={true} onClick={props.handleSubmit} />
  </div>
);

MessageInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChage: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default MessageInput;
