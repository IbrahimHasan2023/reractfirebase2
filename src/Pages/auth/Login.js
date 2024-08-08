import React, { useState } from "react";
import { Form } from "react-bootstrap";
import LoadingSubmit from "../../Components/loading";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { UserAuth } from "../../Context/RoutContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //loading
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const nav = useNavigate();

  // this is to login with firebase
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);

      nav("/dashboard");
    } catch (error) {
      setErr(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingSubmit />}
      <div className="container">
        <div className="row" style={{ height: "100vh" }}>
          <Form className="form" onSubmit={handleLogin}>
            <div className="C-form">
              <h1>Login</h1>
              <br />
              <div>
                <>
                  <Form.Group
                    className="form-custom"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email..."
                      required
                    />
                    <Form.Label>Email</Form.Label>
                  </Form.Group>

                  <Form.Group
                    className="form-custom"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password..."
                      minLength={6}
                      required
                    />
                    <Form.Label>Password</Form.Label>
                  </Form.Group>

                  <button type="submit" className="submit">
                    Login
                  </button>
                  {err && <div className="error">{err}</div>}

                  <p className="py-5">
                    Don't Have Account?
                    <Link
                      to="/register"
                      style={{
                        fontSize: "25px",
                        color: "blue",
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                    >
                      Register
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </p>
                </>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
