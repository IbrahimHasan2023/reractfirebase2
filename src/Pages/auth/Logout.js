import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Css/Component/button.css";
import { auth } from "../../Firebase";

export default function Logout() {
  function handlelogout() {
    auth.signOut().then((val) => {
      console.log(val, "val");
      window.location.pathname = "/login";
    });
  }
  return (
    <div>
      <button onClick={handlelogout} type="submite" className="submit-l">
        Logout
        <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
    </div>
  );
}
