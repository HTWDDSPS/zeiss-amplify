import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Notes from './pages/notes';
import Asset from './pages/assets';
import Shop from './pages/shop'

import { Authenticator, AmplifyProvider, Button, Card, Text, Heading, Flex, Badge, Image, StepperField, useTheme, Tabs, TabItem, View } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';
import './App.css';

const components = {

  Footer() {
    const { tokens } = useTheme();

    return (
      <View className="view-textCenter" padding={tokens.space.large}>
        <Text color={`${tokens.colors.neutral['80']}`}>
          &copy; All Rights Reserved, Team SOBA
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (

        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
        <Image width={100} height={100} alt="Zeiss logo" src="https://logos-download.com/wp-content/uploads/2016/07/Carl_Zeiss_logo.png"/>
        <p>Sign in to your account</p>
        </Heading>
      );
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Team SOBA (HTW Dresden)</Text>;
    },
  },

};


function App() {
  return (
    <div className="App">

      <Authenticator hideSignUp={true} variation="modal" components={components}>
      {({ signOut, user }) => (

        <div className="App">
          <Router>
          <Navbar signOut />

          <Routes>
            <Route exact path='/'  element={<Home />} />
            <Route path='/about' exact element={<About/>} />
            <Route path='/notes' element={<Notes/>} />
            <Route path='/asset' element={<Asset />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
          </Router>
        </div>
      )}
    </Authenticator>

    </div>
  );
}

export default App;