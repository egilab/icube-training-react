const defaultState = {
  cartitem: {},
  totalcart: 0,
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ACTION_ADDCART":
      return {
        ...state,
        totalcart: state.totalcart + 1,
        cartitem: {
          ...state.cartitem,
          [action.item.id]: {
            data: action.item,
            count: state.cartitem[action.item.id]
              ? state.cartitem[action.item.id].count + 1
              : 1,
          },
        },
      };
    case "ACTION_MINCART":
      return {
        ...state,
        totalcart: state.totalcart - 1,
        cartitem: {
          ...state.cartitem,
          [action.item.id]: {
            data: action.item,
            count: state.cartitem[action.item.id]
              ? state.cartitem[action.item.id].count - 1
              : 1,
          },
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
