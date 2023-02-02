//Funciton with(*) are known as Generator Fucntions and they are
// called after the completion of Async Operations.
import { Product_List, Updated_Product_List , Product_Search} from "./prod_action";
import { takeEvery, put } from "@redux-saga/core/effects";
// {takeEvery} will get the type of Function whose data needs to be
// overwritten by the fetched API data using {Put}

function* getProdBySaga() {
  let data = yield fetch("http://localhost:4000/product");
  data = yield data.json();
  console.warn("Data Fetched and being sent to reducer");
  yield put({ type: Updated_Product_List, data });
}

function* getProdBySearch(data) {

  let search_result = yield fetch(`http://localhost:4000/product?q=${data.query}`);
  search_result = yield search_result.json();
  // console.warn("Data Fetched and being sent to reducer", data);
  yield put({ type: Updated_Product_List, data:search_result });
}

function* prod_Saga() {
  // Fetching API Data from generative Function*
  yield takeEvery(Product_List, getProdBySaga);
  yield takeEvery(Product_Search, getProdBySearch);
}


export default prod_Saga;
