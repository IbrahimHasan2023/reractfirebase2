import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase";
// import Cart from "./Cart";
// import "./ProductList.css"; //

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Products"), (snapshot) => {
      const productList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    });

    return () => unsubscribe();
  }, []);

  const addToCart = (product) => {
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];

    // تحقق مما إذا كان المنتج موجودًا بالفعل في السلة
    const existingProductIndex = existingProducts.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex >= 0) {
      // إذا كان موجودًا، قم بزيادة الكمية
      existingProducts[existingProductIndex].quantity += 1;
    } else {
      // إذا لم يكن موجودًا، أضفه مع الكمية 1
      product.quantity = 1;
      existingProducts.push(product);
    }

    localStorage.setItem("products", JSON.stringify(existingProducts));
  };

  return (
    <div className="product-list w-100 m-3">
      <h2>Products</h2>
      <hr />
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card product-card">
              <img
                src={product.ProductImg}
                alt={product.ProductName}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.ProductName}</h5>
                <p className="card-text">{product.ProductPrice} $</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
