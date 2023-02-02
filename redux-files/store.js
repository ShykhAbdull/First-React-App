// import  {createStore}  from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import prod_Saga  from "./prodSaga";
import createSagaMiddleware from "@redux-saga/core";
// Now that Store is Connected with Root Reducer
// const store = createStore(rootReducer);

const saga_middleware = createSagaMiddleware();
const store = configureStore({ reducer: rootReducer, 

middleware: () => [saga_middleware]

})



saga_middleware.run(prod_Saga);
export default store;
