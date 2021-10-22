import React from 'react';
import logo from './logo.svg';
import { Header } from '../components/Header';
import { HomePage } from './HomePage';
import {css} from '@emotion/react'

function App() {
  return (
    <div >
      <Header></Header>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
