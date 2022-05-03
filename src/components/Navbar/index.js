import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Authenticator, AmplifyProvider, Button, Card, Text, Heading, Flex, Badge, Image, StepperField, useTheme, Tabs, TabItem } from '@aws-amplify/ui-react';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/notes" activeStyle>
            Notes
          </NavLink>
          <NavLink to="/asset" activeStyle>
            Asset
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
        <Image width={50} height={50} alt="Zeiss logo" src="https://logos-download.com/wp-content/uploads/2016/07/Carl_Zeiss_logo.png"/>
      </Nav>
    </>
  );
};
  
export default Navbar;