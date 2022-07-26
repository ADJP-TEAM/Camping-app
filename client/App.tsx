/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import './stylesheets/styles.scss';
import SearchBar from './components/searchBar';
import NavContainer from './components/navContainer';
import MainContainer from './components/mainContainer';
import {Routes, Route, useNavigate} from 'react-router-dom';


const App = (): JSX.Element => {

  return (

    <div id= "app">
      <h1>AdventuRent</h1>
      <SearchBar />
      <NavContainer />
      <MainContainer />

    </div>

  );
};

export default App;