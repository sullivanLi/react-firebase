const INITIAL_STATE = {
  username: '',
};

const setUsername = (state, action) => ({
  ...state,
  username: action.username
});

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_USERNAME' : {
      return setUsername(state, action);
    }
    default : return state;
  }
}

export default userReducer;
