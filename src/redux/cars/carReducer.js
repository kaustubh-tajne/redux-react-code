import { BUY_CAR } from "./carTypes";

const initialState = {
  numOfCars: 30,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        numOfCars: state.numOfCars - 1,
      };
    default:
      return state;
  }
};

export default carReducer;


