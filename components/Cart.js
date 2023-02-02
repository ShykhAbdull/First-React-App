import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//Useselector(state) will Get You all the data available in the Redux store.

function Cart() {
  const cartData = useSelector((state) => state.cart_details_reducer);
  const amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((total, next) => total + next);
  const disc = amount - amount * 0.35;
  // console.log(cartData);
  return (
    <div>

      {cartData.length ? (
        <h1>
          Products in the Cart are :
          <div className="prod_cart_data">
            <table>
            <tbody>
              <tr className="Specs">
                <td>
                  <h2>Model</h2>
                </td>
                <td>
                  <h2>Name</h2>
                </td>
                <td>
                  <h2>RAM</h2>
                </td>
                <td>
                  <h2>ROM</h2>
                </td>
                <td>
                  <h2>Price</h2>
                </td>
              </tr>

              {cartData.map((item) => (
                <tr key={item.id}>
                  <td>{item.model}</td>
                  <td>{item.name}</td>
                  <td>{item.Ram}</td>
                  <td>{item.Rom}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
              </tbody>
            </table>
            {/* ------------------Price Adjust ------------------- */}
            <table>
            <tbody>
              <tr className="Specs">
                <td>
                  <h3>Total Price : </h3>
                </td>
                <td>
                  <h3>Discount : </h3>
                </td>
                <td>
                  <h3>Price After Discount : </h3>
                </td>
              </tr>
              <tr>
                <td>{amount}</td>
                <td> 35% Off </td>
                <td>{disc}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </h1>
      ) : (
        <h3>List is Empty</h3>
      )}

      <Link to="/">
        <span className="stl">Go Back to Home page</span>
      </Link>
    </div>
  );
}

export default Cart;
