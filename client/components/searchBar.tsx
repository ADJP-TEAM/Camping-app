import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Select, TextInput, Button } from '@mantine/core';
import { DatePicker } from '@mantine/dates';


const SearchBar = (props, locationId) => {

  const [zipcode, setZipcode] = useState('');
  console.log('zipcode here', zipcode);
 

  const [startDate, onChangeStart] = useState(new Date());
  const [endDate, onChangeEnd] = useState(new Date());

  const fetchLocation = () => {
    fetch(`/api/items/${locationId}`)
    .then(response => response.json())
    .then(data => console.log('inside of fecth', data));
  };

  useEffect(() => {
    fetchLocation();
  }, []);



  const handleClick = () => {
    if(startDate > endDate) {
      alert('dates invalid');
    }
    else if(!zipcode) {
      alert('please enter zipcode');
    }
    else {
      // alert('should query db and show listings according to user search criteria');
      fetchLocation();

    }
  };

  return (
    <div id= "searchBar">
      {/* Dropdown search bar */}
      <TextInput label="Zipcode" placeholder="10001" value={zipcode} onChange={(e) => setZipcode(e.currentTarget.value)} required/>
      {/* <Select value={search} onChange={setSearch} data={['1', '2']} /> */}

      {/* DatePicker Calendar */}
      <DatePicker id="startDate" label="Start Date" value={startDate} onChange={onChangeStart} required/>
      <DatePicker id="endDate" label="End Date" value={endDate} onChange={onChangeEnd} required/>
      <Button variant="light" onClick={handleClick}>Search</Button>
    </div>
  );
};

export default SearchBar;