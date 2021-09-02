export const initialState = {
  basket: [],
  user: null,
};

export const basketTotalPrice = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const itemIndex = newBasket.findIndex((item) => item.id === action.id);
      if (itemIndex >= 0) {
        newBasket.splice(itemIndex, 1);
      } else {
        console.warn("No items to remove from" + action.id);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "CLEAR_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
