import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../Components/Website/NavBar/Navbar";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <Navbar />
      <div
        className="px-5"
        style={{ height: "100vh", backgroundColor: "beige" }}
      >
        <h3 className="p-5 gap-3 d-flex">
          <FontAwesomeIcon icon={faAddressCard} />
          <p>About us and Our Project :</p>
        </h3>
        <h5>
          we are group of student want to build this project to make the
          operation of shopping more easier !
        </h5>
        <h6>
          the kind of shopping we made is the foods shop
          <br />
          <br />
          this kind is nuts !
        </h6>
        <img src={require("../../Images/about-us-page-heading.jpg")} alt="#" />
      </div>
    </>
  );
}
