/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import './stylesheets/styles.scss';
import SearchBar from './components/searchBar';
import NavContainer from './components/navContainer';
import MainContainer from './components/mainContainer';
import {Routes, Route, useNavigate} from 'react-router-dom';
import ListingPage from './components/ListingPage';


const App = (props): JSX.Element => {


  return (

    <div id= "app">
      {/* <h1>AdventuRent</h1> */}
      <main>
        <NavContainer />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <MainContainer />
              </>
            }
          />
          <Route
            path="/listing"
            element={
              <ListingPage />
            }
          />
        </Routes>
      </main>
     

    </div>

  );
};

export default App;