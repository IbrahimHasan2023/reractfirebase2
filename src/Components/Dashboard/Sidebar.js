import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bars.css";
import {
  faAdd,
  faCartShopping,
  faHome,
  faP,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = useContext(Menu);
  const isopen = menu.isopen;

  return (
    <div
      className="side-bar pt-3 side-bar "
      style={{ width: isopen ? "250px" : "fit-content" }}
    >
      <NavLink
        to={"addProducts"}
        className="d-flex align-items-center gap-2 m-2 side-bar-link"
      >
        <FontAwesomeIcon
          style={{ padding: isopen ? "10px 8px 10px 15px " : "10px 12px" }}
          icon={faAdd}
        />
        <p className="m-0" style={{ display: isopen ? "block" : "none" }}>
          Addproduct
        </p>
      </NavLink>
      <NavLink
        to={"Products"}
        className="d-flex align-items-center gap-2 m-2 side-bar-link"
      >
        <FontAwesomeIcon
          style={{ padding: isopen ? "10px 8px 10px 15px " : "10px 12px" }}
          icon={faP}
        />
        <p className="m-0" style={{ display: isopen ? "block" : "none" }}>
          Products
        </p>
      </NavLink>
      <NavLink
        to={"Cart"}
        className="d-flex align-items-center gap-2 m-2 side-bar-link"
      >
        <FontAwesomeIcon
          style={{ padding: isopen ? "10px 8px 10px 15px " : "10px 12px" }}
          icon={faCartShopping}
        />
        <p className="m-0" style={{ display: isopen ? "block" : "none" }}>
          Cart
        </p>
      </NavLink>
      {/* this is for home */}
      <Link
        to={"/"}
        className=" d-flex align-items-center gap-2 m-2 side-bar-linkH"
        style={{ width: isopen ? "140px" : "fit-content" }}
      >
        <FontAwesomeIcon
          style={{ padding: isopen ? "10px 8px 10px 15px " : "10px 12px" }}
          icon={faHome}
        />
        <p className="m-0" style={{ display: isopen ? "block" : "none" }}>
          Home
        </p>
      </Link>
    </div>
  );
}
