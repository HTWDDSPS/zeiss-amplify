import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/notes" activeStyle>
            Notes
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;