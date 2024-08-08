// import { Form } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../../../Pages/Website/Home.css";
import Logout from "../../../Pages/auth/Logout";
import { useEffect, useState } from "react";
import { auth } from "../../../Firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        return;
      }
      setUser(null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="py-3">
      <Container className="respon">
        <div className=" d-flex align-items-center justify-content-between">
          <Link className="col-0" to="/">
            <img
              width="150px"
              src={require("../../../Images/Orange Simple Online Shopping Logo (2).png")}
              alt="logo"
            />
          </Link>

          <div className="col-3 d-flex align-items-center justify-content-end gap-5 order-md-3 order-1">
            <div>
              <NavLink activeclassname="active" className="px-5 same" to="/">
                Home
              </NavLink>

              <NavLink
                activeclassname="active"
                className="px-5 same "
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                activeclassname="active"
                className="px-5 same "
                to="/contact"
              >
                Contact
              </NavLink>
            </div>

            {!user && (
              <div className="d-flex gap-1">
                <NavLink
                  to="/register"
                  style={{ textAlign: "center" }}
                  className="submit"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  style={{ textAlign: "center" }}
                  className="submit"
                >
                  Login
                </NavLink>
              </div>
            )}
            {user && (
              <div className="d-flex align-items-center  gap-5">
                <NavLink to="/dashboard/cart">
                  <img
                    width="30px"
                    src={require("../../../Images/cart.png")}
                    alt="cart"
                  />
                </NavLink>{" "}
                <Logout />
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}
