import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { prodAction } from "../redux-files/prod_action";
import { prodAction_Search } from "../redux-files/prod_action";
// UseSelector Hook is used to Get the reducer data back

const Headerr = () => {
  const counter = useSelector((state) => state.cart_details_reducer);
  console.log("Product Counter : ", counter.length);

  const dispatch = useDispatch();
  return (
    <Link to="/cart" >
      <Link to="/" onClick={() => dispatch(prodAction())}>
        <span  className="logo">SOCIO CART ECOM</span>
      </Link>
      <Link to="/">
        <div className="searchbox">
          <input id="inputfield" type="text" onChange={(e) => dispatch(prodAction_Search(e.target.value)) } placeholder="Search Products" />
        </div>
      </Link>
      <div className="cart_div">
        <span>{counter.length}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt=""
        />
      </div>
    </Link>
  );
};
export default Headerr;
