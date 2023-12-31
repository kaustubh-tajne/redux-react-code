import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  noOfCakes: 10,
};

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        noOfCakes: state.noOfCakes - action.payload
      };
    default:
      return state;
  }
};
