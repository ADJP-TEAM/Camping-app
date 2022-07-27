/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import './stylesheets/styles.scss';
import SearchBar from './components/searchBar';
import NavContainer from './components/navContainer';
import MainContainer from './components/mainContainer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getModeForUsageLocation } from 'typescript';
import jwt_decode from 'jwt-decode';
import ListingPage from './components/ListingPage';

const App = (): JSX.Element => {
  const [user, setUser] = useState({});
  //const [user, setUser] = useState({});

  // takes response from google client takes the response
  const handleCallbackResponse = (response) => {
    // grabs the Encoded JWT ID token from the response
    console.log('Encoded JWT ID token: ', response.credential);
    // @ts-ignore
    const { email, given_name, picture } = jwt_decode(response.credential);
    setUser({ email, given_name, picture });
    //Object.assign(userObject, { username: 'AlRokosz2000' });
    console.log('google User Object: ', email, given_name, picture);
    // console.log('Decoded JWT ID token: ', response.credential.idToken);
    // console.log('Google Oauth Object: ', response);
  };

  // // Initialize google client with our client ID and button for login
  // // useEffect - if anything in empty initialized array changes, it will run useEffect again
  // useEffect(() => {
  //   /* global google */
  //   // @ts-ignore
  //   google.accounts.id.initialize({
  //     client_id:
  //       '795207565134-60m35dko1d1ohdorjlg7akssqh1ghu19.apps.googleusercontent.com',
  //     // callback - function to run when user is logged in
  //     callback: handleCallbackResponse,
  //   });
  //   // @ts-ignore
  //   google.accounts.id.renderButton(document.getElementById('signInDiv'), {
  //     theme: 'outline',
  //     size: 'large',
  //   });
  // }, []);

  return (
    <div id="app">
      {/* <div id="signInDiv"></div> */}
      {/* <h1>AdventuRent</h1> */}
      <main>
        <NavContainer
          user={user}
          setUser={setUser}
          tabs={['Tents', 'Sleeping Bags', 'Cookware', 'Accessories', 'Gear']}
          handleCallbackResponse={handleCallbackResponse}
        />
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
          <Route path="/listing" element={<ListingPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
