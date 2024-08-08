import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";
import Logout from "../../Pages/auth/Logout";
import { motion } from "framer-motion";

export default function Topbar() {
  const word = "Welcome_To_Our_Store";

  const menu = useContext(Menu);
  const setIsopen = menu.setIsopen;

  return (
    <div className="Top-bar ">
      <div className="d-flex align-items-center justify-content-between h-100">
        <div className="d-flex align-items-center gap-4">
          <h3>E-commerce</h3>
          <FontAwesomeIcon
            onClick={() => setIsopen((prev) => !prev)}
            cursor={"pointer"}
            icon={faBars}
          />
        </div>
        <motion.div
          className="d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} // Customize animation duration
          style={{ fontSize: "30px", fontWeight: "bold", color: "#7731D8" }} // Set font size
        >
          {word.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} // Delay each character
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <div>
          <Logout />
        </div>
      </div>
    </div>
  );
}

// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useContext } from "react";
// import { Menu } from "../../Context/MenuContext";
// // import Logout from "../../Pages/auth/Logout";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { Database } from "firebase/database";
// import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

// export default function Topbar() {
//   const Navigate = useNavigate;
//   function handlelogout() {
//     signOut(Database).then(val => {
//       console.log(val,"val")
//       Navigate("/");
//     });
//   }

//   const menu = useContext(Menu);
//   const setIsopen = menu.setIsopen;

//   return (
//     <div className="Top-bar ">
//       <div className="d-flex align-items-center justify-content-between h-100">
//         <div className="d-flex align-items-center gap-4">
//           <h3>E-commerce</h3>
//           <FontAwesomeIcon
//             onClick={() => setIsopen((prev) => !prev)}
//             cursor={"pointer"}
//             icon={faBars}
//           />
//         </div>
//         <div>
//           <button onClick={handlelogout} type="submite" className="submit-l">
//             Logout
//             <FontAwesomeIcon icon={faRightFromBracket} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
