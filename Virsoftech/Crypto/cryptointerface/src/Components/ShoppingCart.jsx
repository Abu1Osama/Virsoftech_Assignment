import React, { useState } from "react";
import CryptoCard from "./CryptoCard";
import CartItem from "./CartItem";
import "../Styles/Shoppingcart.scss";
import { toast } from "react-hot-toast";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const cryptoData = [
    { name: "Bitcoin", price: 40000 },
    { name: "Ethereum", price: 2800 },
    { name: "Litecoin", price: 150 },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (itemName) => {
    const itemIndexToRemove = cart.findIndex((item) => item.name === itemName);

    if (itemIndexToRemove !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(itemIndexToRemove, 1);
      setCart(updatedCart);
    }
    toast.success("Deleted from cart !", {
      style: {
        borderRadius: "50px",
        background: "#000428",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="shoppingcart" id="shoppingcart">
      <h1 style={{ color: "white", textAlign: "center" }}>
        Crypto Purchase Interface
      </h1>
      <div className="shoppingcart-cards">
        {cryptoData.map((crypto, index) => (
          <CryptoCard
            key={index}
            name={crypto.name}
            price={crypto.price}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className="cart">
        <div>
          <h2 className="heading-cart">Your Cart</h2>
        </div>

        <div className="cartdata">
          {cart.length === 0 ? (
            <div>
              <p>Your cart is empty!</p>
            </div>
          ) : (
            <>
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  removeFromCart={removeFromCart}
                />
              ))}
            </>
          )}
        </div>
        <div className="total-price">
          <p>Total: ${cartTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
