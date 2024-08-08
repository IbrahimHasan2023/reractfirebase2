import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../Components/Website/NavBar/Navbar";
import { Link } from "react-router-dom";

export default function HomePages() {
  return (
    <div>
      <Navbar />
      <div className="d-flex align-items-center justify-content-between flex-wrap hand">
        <Container>
          <div className="col-lg-5 col-md-8 col-12 text-md-start text-center">
            <h1 className="display-3 fw-bold ">Nuts</h1>
            <h4 style={{ color: "black" }} className="fw-normal">
              Welcome to Our Shop Here you can choose a nuts that matches your
              personal preferences. Happy Shopping!
            </h4>

            <Link
              to="/dashboard"
              className="btn btn-primary mt-3 py-4 fw-bold text-light"
            >
              Shop now
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
