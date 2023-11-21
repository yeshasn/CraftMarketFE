import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  //   STATES
  const [click, setClick] = useState(false);
  console.log(props);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/home">
        <h3>CraftMarket</h3>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link className="hoverable" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/add-product" state={{ data: props.userPhone }}>
            Add Product
          </Link>
        </li>
        <li>
          <Link to="/manage-items" state={{ data: props.userPhone }}>
            Manage Items
          </Link>
        </li>
        <li>
          <Link to="/projects">Edit Profile</Link>
        </li>
        <li>
          <Link to="/sign-in">Log Out</Link>
        </li>
        {/* <li>
                <Link to="/contact">Contact</Link>
            </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
