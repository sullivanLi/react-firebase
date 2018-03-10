import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class UserDialog extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: '',
    }
  }

  handleChage = (field) => (event) => {
    this.setState({
      [field]: event.target.value,
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Submit"
        primary={true}
        onClick={() => this.props.handleSubmit(this.state.name)}
      />,
    ];

    return (
      <div>
        <Dialog
          title="User Dialog"
          actions={actions}
          modal={true}
          open={this.props.open}
        >
          <div style={{ color: 'red' }}>
            {this.props.errMsg}
          </div>
          <TextField hintText="Your Name" onChange={this.handleChage('name')} />
        </Dialog>
      </div>
    );
  }
}

UserDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errMsg: PropTypes.string,
};

export default UserDialog;
