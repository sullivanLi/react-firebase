import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';

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
    const MessageList = this.props.messages.map((item) =>
      <ListItem key={item.id}
        primaryText={
          <p>
            {item.username} -> {this.timeformat(item.timestamp)}
          </p>
        }
        secondaryText={item.message}
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

Board.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Board;
