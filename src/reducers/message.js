const INITIAL_STATE = {
  messageList: [],
};

const addMessage = (state, action) => ({
  ...state,
  messageList: [action.message, ...state.messageList]
});

function messageReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_MESSAGE' : {
      return addMessage(state, action);
    }
    default : return state;
  }
}

export default messageReducer;
