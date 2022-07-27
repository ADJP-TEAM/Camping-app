import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Select, TextInput, Button } from '@mantine/core';
import { DatePicker } from '@mantine/dates';


const SearchBar = (props) => {
 
  const {setZipcode, zipcode} = props;
  const [startDate, onChangeStart] = useState(new Date());
  const [endDate, onChangeEnd] = useState(new Date());
  const [textZip, setTextZip] = useState('10001');

  // const fetchLocation = () => {
  //   fetch(`/api/items/${zipcode}`)
  //   .then(response => response.json())
  //   .then(data => console.log('inside of fecth', data));
  // };

  // useEffect(() => {
  //   fetchLocation();
  // }, [zipcode]);



  const handleClick = (e) => {
    // console.log(e.target);
    // if(startDate > endDate) {
    //   alert('dates invalid');
    // }
    // else if(!zipcode) {
    //   console.log(e)
    //   alert('please enter zipcode');
    // }
    // else {
    //   // alert('should query db and show listings according to user search criteria');
    // @ts-ignore
    console.log('text content', document.getElementById('zipcodeBar').value);
    // @ts-ignore
    setZipcode(document.getElementById('zipcodeBar').value);
    // }
  };


  return (
    <div id= "searchBar">
      {/* Dropdown search bar */}
      <TextInput id="zipcodeBar" label="Zipcode" placeholder="10001" value={textZip} onChange={(e) => setTextZip(e.currentTarget.value)} required/>
      {/* <Select value={search} onChange={setSearch} data={['1', '2']} /> */}

      {/* DatePicker Calendar */}
      <DatePicker id="startDate" label="Start Date" value={startDate} onChange={onChangeStart} required/>
      <DatePicker id="endDate" label="End Date" value={endDate} onChange={onChangeEnd} required/>
      <Button variant="light" onClick={(e) => handleClick(e)}>Search</Button>
    </div>
  );
};

export default SearchBar;