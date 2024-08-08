import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../Components/Website/NavBar/Navbar";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <div>
        <Navbar />
        <div className="p-5" style={{ backgroundColor: "ButtonShadow" }}>
          <h3>
            Contact With Us :
            <FontAwesomeIcon icon={faMobile} />
          </h3>
          <br />
          <h5>
            find us :
            <br />
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              Email: "informatic12e@gmail.com"
            </p>
          </h5>
          <img
            className="p-5"
            src={require("../../Images/footer-light-bg.png")}
            alt="#"
          />
          {/* <p>
            you can find our products<Link to="/dashboard">Here</Link>!
          </p> */}
        </div>
      </div>
    </>
  );
}
