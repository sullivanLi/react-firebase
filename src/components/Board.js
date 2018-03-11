import React, { PureComponent } from 'react';
import { List, ListItem } from 'material-ui/List';
import { connect } from 'react-redux';

class Board extends PureComponent {
  timeformat = (timestamp) => {
    var date = new Date(timestamp);
    const year    = date.getFullYear();
    const month   = date.getMonth()+1;
    const day     = date.getDate();
    const hour    = date.getHours();
    const minute  = date.getMinutes();
    const seconds = date.getSeconds();
    return `${year}/${month}/${day} ${hour}:${minute}:${seconds}`;
  }

  render() {
    const MessageList = this.props.messageList.map((message) =>
      <ListItem key={message.id}
        primaryText={
          <p>
            {message.username} -> {this.timeformat(message.timestamp)}
          </p>
        }
        secondaryText={message.message}
      >
      </ListItem>
    );

    return (
      <div style={{height: 500, overflow: 'auto'}}>
        <List>
          {MessageList}
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messageList: state.messageState.messageList,
});

export default connect(mapStateToProps)(Board);
