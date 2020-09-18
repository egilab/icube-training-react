const defaultState = {
  totalitem: 0,
  cartitem: {},
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ACTION_ADDCART":
      return {
        ...state,
        totalitem: action.total + action.item.qty,
        cartitem: {
          ...state.cartitem,
          [action.item.id]: action.item,
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
