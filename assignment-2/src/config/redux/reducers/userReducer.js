const defaultState = {
  user: null,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ACTION_REGISTER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;