import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import logo from '../docs/AdventuRent.png';
import { Button } from '@mantine/core';

const NavContainer = () => {
  return (
    <div id="navContainer">
      <div id="logo">
        <h1> ADVENTURENT</h1>
        {/* <a href='/'><img src={logo} id='logo' /></a> */}
        {/* BUTTONS PLACEHOLDER: */}
        <Button
          variant="gradient"
          gradient={{ from: 'teal', to: 'lime', deg: 105 }}
        >
          Login
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: 'teal', to: 'lime', deg: 105 }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default NavContainer; //Container to add logo & login-sign up buttons
