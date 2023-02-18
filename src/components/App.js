import React from 'react'
import '../styles/App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResult from './SearchResult';
import { useState } from 'react';
import JourneyContext from '../context/JourneyContext';
import Journey from './Journey';
import SeatSelection from './SeatSelection';
import Login from './Login';

const App = () => {

  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  return (
    <div id="main">
      <JourneyContext.Provider value={
        {
          fromCity: fromCity,
          toCity: toCity,
          setFromCity: setFromCity,
          setToCity: setToCity
        }
      }>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/results' element={<Journey Component={SearchResult}/>} />
            <Route path='/book-seats' element={<Journey Component={SeatSelection}/>} />
          </Routes>
        </BrowserRouter>
      </JourneyContext.Provider>
    </div>
  )
}


export default App;
