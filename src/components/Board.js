import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import shortid from 'shortid';

class Board extends PureComponent {
  render() {
    const MessageList = this.props.messages.map((item) =>
      <ListItem key={shortid.generate()}
        primaryText={
          <p>
            {item.username} -> {item.timestamp}
          </p>
        }
        secondaryText={item.message}
      >
      </ListItem>
    );

    return (
      <div style={{maxHeight: 500, overflow: 'auto'}}>
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
