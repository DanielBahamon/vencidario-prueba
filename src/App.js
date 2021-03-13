import React, { Fragment } from 'react';
import './App.css';
import db from 'firebase/app';
import Navbar from './components/Navbar';
import Section_1 from './components/Section_1';
import Section_2 from './components/Section_2';
import Section_3 from './components/Section_3';
import Section_4 from './components/Section_4';

function App() {

  return (
    <Fragment>
      <Navbar/>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
    </Fragment>
    
  );
}

export default App;
