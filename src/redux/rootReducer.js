import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import carReducer from "./cars/carReducer";
import { userReducer } from "./user/userReduser";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    car: carReducer,
    user: userReducer    
})

export default rootReducer;

