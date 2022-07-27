import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { isTemplateExpression } from 'typescript';
import CardComponent from './CardComponent';


const MainContainer = ({zipcode}) => {
  const [items, setItems] = useState({items: []});


  useEffect(() => {
    fetch(`/api/items/${zipcode}`)
    .then(response => response.json())
    .then(data => setItems(data));
  }, [zipcode]);
  
  // query db to fill cardsArray
  const cardsArray = [];
  const itemsArray = items.items;
  for(let i = 0; i < itemsArray.length; i++) {
    cardsArray.push(
      <CardComponent
        id={itemsArray[i]._id}
        userId = {itemsArray[i].user_id}
        itemName={itemsArray[i].name}
        itemDescription={itemsArray[i].description}
        price={itemsArray[i].cost}
        location={itemsArray[i].location}
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

/* 
{
    "items": [
        {
            "_id": "7211fc2c-772d-419d-98ee-98722b50b580",
            "user_id": "e1d492ca-76e1-483f-b0f7-c6a3fe829055",
            "name": "really cool flashlight",
            "cost": "50",
            "location": "10001"
        },
        {
            "_id": "7a3c7f6b-2565-4786-9bea-a30910fae3bf",
            "user_id": "e1d492ca-76e1-483f-b0f7-c6a3fe829055",
            "name": "really cool tent",
            "cost": "50000",
            "location": "10001"
        },
        {
            "_id": "365c38b7-7118-41ac-aa78-b0e302de2403",
            "user_id": "e1d492ca-76e1-483f-b0f7-c6a3fe829055",
            "name": "really cool carribeaner",
            "cost": "50000",
            "location": "10001"
        },
        {
            "_id": "def5aa88-d6e4-4d04-9c40-536912246453",
            "user_id": "e1d492ca-76e1-483f-b0f7-c6a3fe829055",
            "name": "really cool hat",
            "cost": "50",
            "location": "10001"
        }
    ]
}
*/