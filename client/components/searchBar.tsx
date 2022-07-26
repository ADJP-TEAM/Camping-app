import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Select } from '@mantine/core';
import { DatePicker } from '@mantine/dates';


const SearchBar = () => {

  const [search, setSearch] = useState('');
  const [date, onChange] = useState(new Date());
  

  return (
    <div id= "searchBar">
      <h1> Search Bar</h1>
      {/* Dropdown search bar */}
      <Select value={search} onChange={setSearch} data={[]} />;

      {/* DatePicker Calendar */}
      <DatePicker value={date} onChange={onChange}

    //  Current Location placeholder 
      />
    </div>
  );
};

export default SearchBar;