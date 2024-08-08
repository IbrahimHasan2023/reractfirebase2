import { Route, Routes } from "react-router-dom";
//the website
import HomePages from "./Pages/Website/HomePages";
import About from "./Pages/Website/About";
import Contact from "./Pages/Website/Contact";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";

// this is private until the user signing
import Dashboard from "./Pages/Dashboard/Dashboard";
import Products from "./Pages/Dashboard/Products";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";
import ProtectedRout from "./Pages/auth/ProtectedRout";
import Addproduct from "./Pages/Dashboard/Addproduct";
import Cart from "./Pages/Dashboard/Cart";

export default function App() {
  const [user, setUser] = useState(null);
  const [isfetch, setIsFetch] = useState(true);
  const [cart, setCart] = useState([]); // Manage cart state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetch(false);
        return;
      }
      setUser(null);
      setIsFetch(false);
    });
    return () => unsubscribe();
  }, []);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  if (isfetch) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* protected routes */}
        <Route
          path="Dashboard"
          element={
            <ProtectedRout user={user}>
              <Dashboard></Dashboard>
            </ProtectedRout>
          }
        >
          <Route
            path="addProducts"
            element={
              <ProtectedRout user={user} isAdmin={true}>
                <Addproduct />
              </ProtectedRout>
            }
          />
          <Route
            path="Products"
            element={<Products addToCart={addToCart}></Products>}
          />
          <Route path="cart" element={<Cart cart={cart}></Cart>} />
        </Route>
      </Routes>
    </div>
  );
}
