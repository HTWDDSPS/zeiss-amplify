import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { App } from "../../App"
import { Auth } from 'aws-amplify'

import { Authenticator, AmplifyProvider, Button, Card, Text, Heading, Flex, Badge, Image, StepperField, useTheme, Tabs, TabItem, Icon, Divider, Link } from '@aws-amplify/ui-react';
import { MdLogin, MdShoppingCart, MdSettingsAccessibility,MdSettingsCell, MdRule, MdCloseFullscreen, MdHome } from 'react-icons/md'
const Navbar = () => {
  async function signOut() {
    await Auth.signOut()
      .then(data => window.location.reload())
      .catch(err => console.log(err))
  }
  
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/"><Button variation="menu"><Icon ariaLabel="Javascript" as={MdHome}/>&nbsp;Home</Button></NavLink>
          <NavLink to="/asset"><Button variation="menu" to="/asset"><Icon ariaLabel="Javascript" as={MdSettingsCell}/>&nbsp;Asset</Button></NavLink>
          <NavLink to="/notes"><Button variation="menu" to="/notes"><Icon ariaLabel="Javascript" as={MdRule}/>&nbsp;Notes</Button></NavLink>
          <NavLink to="/shop"><Button variation="menu" to="/shop"><Icon ariaLabel="Javascript" as={MdShoppingCart}/>&nbsp;Marktplace</Button></NavLink>
          <NavLink to="/about"><Button variation="menu" to="/about"><Icon ariaLabel="Javascript" as={MdSettingsAccessibility}/>&nbsp;About</Button></NavLink>
          <Button variation="menu" onClick={signOut}><Icon ariaLabel="Javascript" as={MdLogin}/>&nbsp;Sign Out</Button>
        </NavMenu>
        <Image width={50} height={50} alt="Zeiss logo" src="https://logos-download.com/wp-content/uploads/2016/07/Carl_Zeiss_logo.png"/>
      </Nav>
    </>
  );
};
  
export default Navbar;