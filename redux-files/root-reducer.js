import { combineReducers } from "redux"; //Combinig Function of Reducer.js 
import { cart_details_reducer } from "./reducer"; //Importing Function
import { prodReducer } from "./prod_reducer"


export default combineReducers({cart_details_reducer, prodReducer});
