import React from "react";
import { ImStatsBars2 } from "react-icons/im";
import { BsSignpost } from "react-icons/bs";
import { BsBasket3 } from "react-icons/bs";
// import { IoMdChatboxes } from "react-icons/io";
import { IoAddCircleSharp } from "react-icons/io5";
import { VscFiles } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import "./navbar.css";

const Navbar = ({ isDarkMode }) => {
   return (
      <div className={isDarkMode === false ? "nav" : "darkNav"}>
         <img
            className="pp"
            src="https://media.istockphoto.com/photos/young-bearded-businessman-sitting-on-desk-and-posing-picture-id1322913815?b=1&k=20&m=1322913815&s=170667a&w=0&h=rvURoK1t_rjAf09De0F5v6L9_wgJrUuZK_cw3vjPgDM="
            alt=""
         />
         <ImStatsBars2 size={20} />
         <BsSignpost size={20} />
         <BsBasket3 size={20} />
         <VscFiles size={20} />
         <FiSettings size={20} />
         <IoAddCircleSharp
            size={37}
            style={{
               color: "#29CB97",
            }}
            className="add"
         />
      </div>
   );
};

export default Navbar;
