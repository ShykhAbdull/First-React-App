import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux-files/store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const ROOT = ReactDOM.createRoot(document.getElementById("root"));
//Const root contains the container from the (Index.html) in which
// h1 tag inside of Counter Class is returned to the render() function.
ROOT.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
// That returned Hello world(inside class Counter) is then
// imported here and then rendered by the above statement
reportWebVitals();
