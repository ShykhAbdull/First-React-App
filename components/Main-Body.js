import { addtocart, emptycart, removetocart } from "../redux-files/action";
import { prodAction } from "../redux-files/prod_action";
import { useDispatch } from "react-redux";
import { useState } from "react";
//UseDispatch is used to send data of action functions to reducer
import { useSelector } from "react-redux";
// import { useEffect } from "react";
//UseSelector is used to get Reducer data through State

// Importing Function

function Main() {
  const[style , setStyle] = useState();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // UseEffect hook is used to trigger prodAction Function on every Reload
  //   dispatch(prodAction());
  // }, []);

  // const prodInfo = {
  //   name: "Android",
  //   color: "red",
  //   type: "OS",
  //   price: "$500",
  // };
  const changeStyle = () => {
    setStyle("block")
  }

  const product_data = useSelector((state) => state.prodReducer);
  console.warn("Product Data : ", product_data);

  return (
    <div>

      <div className={style} onClick={changeStyle}>
        <br />
        <button onClick={() => dispatch(emptycart())}>Empty The Cart</button>
        <br />
        <button onClick={() => dispatch(prodAction())}>Get Product List</button>
      </div>

      <div className="prod-container">
        {product_data.map((items)  => (

          <div className="prod-specs">
            <img onClick={() => dispatch(addtocart(items))} src={items.thumbnail} className="products" alt="Products" />
            <div >Model : {items.model} </div>
            <div >Name : {items.name} </div>
            <div >
              Ram/Rom : {items.Ram} / {items.Rom}
            </div>
            
            <div key={items.id}>
              <button onClick={() => dispatch(addtocart(items))}>
                Add To Cart
              </button>
              <button onClick={() => dispatch(removetocart(items.id))}>
                Remove To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
