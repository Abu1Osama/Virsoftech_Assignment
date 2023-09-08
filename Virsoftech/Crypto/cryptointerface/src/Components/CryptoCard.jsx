import React, { useState } from "react";
import "../Styles/Cryptocard.scss";
import { toast } from "react-hot-toast";

const CryptoCard = ({ name, price, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleBuyClick = () => {
    if (quantity > 0) {
      addToCart({ name, quantity, price });
      toast.success("Added to cart !", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
      setQuantity(0);
    } else {
      toast.error("Please enter a quantity", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    }
  };

  return (
    <div className="cryptocard" id="cryptocard">
      <h2>{name}</h2>
      <p className="crypto-price">Price: ${price}</p>
      <input
        type="number"
        min="0"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="maininput"
      />
      <button onClick={handleBuyClick} className="buy-button">
        Buy
      </button>
    </div>
  );
};

export default CryptoCard;
