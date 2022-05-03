import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Notes from './pages/notes';

import { Authenticator, AmplifyProvider, Button, Card, Text, Heading, Flex, Badge, Image, StepperField, useTheme, Tabs, TabItem } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';
import './App.css';

const initialFormState = { name: '', description: '' }


function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Zeiss Thingkathon</h1>
      </header>
      <Authenticator>
      {({ signOut, user }) => (

        <div className="App">
        <p>
        Hey {user.username}, welcome to my channel, with auth!
        </p>
          
        <Router>
        <Navbar />
        <Routes>
            <Route exact path='/'  element={<Home />} />
            <Route path='/about' exact element={<About/>} />
            <Route path='/notes' element={<Notes/>} />
        </Routes>
        </Router>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
    </div>
  );
}

export default App;