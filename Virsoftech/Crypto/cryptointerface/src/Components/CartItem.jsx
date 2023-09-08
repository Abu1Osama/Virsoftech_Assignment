import React from "react";
import "../Styles/CartItem.scss";

function CartItem({ name, quantity, price, removeFromCart }) {
  return (
    <div className="cart-item" id="cart-item">
      <p>Name:-{name} </p>

      <p>Quantity: {quantity}</p>
      <p>Total: ${quantity * price}</p>
      <button onClick={() => removeFromCart(name)}>Remove</button>
    </div>
  );
}

export default CartItem;
