import React, { useState } from "react";
import { Form } from "react-bootstrap";
import LoadingSubmit from "../../Components/loading";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //loading
  const [loading, setLoading] = useState(false);
  // error
  const [err, setErr] = useState("");

  const nav = useNavigate();

  // this is to register with firebase
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // .then(
      //   (usercridential) => {
      // const user = usercridential.user;
      // if (user) {
      nav("/dashboard");
      // }
      // }
      // )
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
          <Form className="form" onSubmit={handleRegister}>
            <div className="C-form">
              <h1>Register</h1>
              <br />
              <div>
                <>
                  <Form.Group
                    className="form-custom"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name..."
                      required
                    />
                    <Form.Label>Name</Form.Label>
                  </Form.Group>
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
                    REGISTER
                  </button>
                  {err && <div className="error">{err}</div>}

                  <p className="py-2">
                    Alredy registered? <br />
                    <Link
                      to="/login"
                      style={{
                        fontSize: "25px",
                        color: "blue",
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                    >
                      Login
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
