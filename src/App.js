import React, { PureComponent } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChatBoard from './containers/ChatBoard';

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <ChatBoard />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
