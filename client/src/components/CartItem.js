import * as cartActions from "../redux/cart/cartActions";
import { connect } from "react-redux";
import updateCart from "../functions/updateCart";
import "../css/CartItem.css";

const CartItem = ({
  itemId,
  itemImageURL,
  itemName,
  itemQuantity,
  itemPrice,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  REMOVE_FROM_CART,
}) => {
  const itemFunction = (functionName, param) => {
    functionName(param);
    updateCart(email, cartItems);
  };

  return (
    <div className="cart--item">
      <img src={itemImageURL} alt={`${itemName}`} />

      <section>
        <p>{itemName}</p>
        <p>${itemPrice}</p>
        <div>
          <button
            disabled={itemQuantity === 1}
            onClick={() => itemFunction(DECREASE_ITEM_QUANTITY, itemId)}
          >
            -
          </button>
          <p>{itemQuantity}</p>
          <button
            onClick={() => itemFunction(INCREASE_ITEM_QUANTITY, itemId)}
            disabled={itemQuantity === 5}
          >
            +
          </button>
          <button
            style={{ marginLeft: "4px" }}
            onClick={() => itemFunction(REMOVE_FROM_CART, itemId)}
          >
            x
          </button>
        </div>
      </section>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    REMOVE_FROM_CART: (productId) =>
      dispatch(cartActions.REMOVE_FROM_CART(productId)),
    INCREASE_ITEM_QUANTITY: (productId) =>
      dispatch(cartActions.INCREASE_ITEM_QUANTITY(productId)),
    DECREASE_ITEM_QUANTITY: (productId) =>
      dispatch(cartActions.DECREASE_ITEM_QUANTITY(productId)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
