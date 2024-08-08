import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCart(storedProducts);
  }, []);

  const updateQuantity = (index, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    setCart(updatedCart);
    localStorage.setItem("products", JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("products", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart w-100 m-3">
      <h2>Your Cart</h2>
      <hr />
      <ul className="cart-list">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <li key={index} className="cart-item">
              <img
                src={product.ProductImg}
                alt={product.ProductName}
                className="cart-item-img"
              />
              <div className="cart-item-details d-flex align-items-center justify-content-between">
                <div>
                  <p className="cart-item-name">{product.ProductName}</p>
                  <p className="cart-item-price">${product.ProductPrice}</p>
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    value={product.quantity || 1}
                    onChange={(e) =>
                      updateQuantity(index, Number(e.target.value))
                    }
                    className="quantity-input"
                  />
                  <button
                    onClick={() => removeFromCart(index)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>
    </div>
  );
}
