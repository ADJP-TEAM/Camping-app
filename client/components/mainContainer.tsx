import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import CardComponent from './CardComponent';



const MainContainer = (props) => {

  // query db to fill cardsArray
  const cardsArray = [];
  for(let i = 0; i < 10; i++) {
    cardsArray.push(
      <CardComponent
        id={i}
        itemName={`Placeholder Name ${i}`}
        itemDescription={`Placeholder Description ${i}`}
        pricePerDay={`Placeholder Price ${i}`}
        location={`Placeholder Location ${i}`}
      />
    );
  }

  return (
    <div id="mainContainer">
      {cardsArray}
    </div>
  );
};

export default MainContainer; //container for displaying items cards