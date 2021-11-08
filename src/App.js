import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router,  Route  } from 'react-router-dom';
// import TacosListings from './components/TacosListings';
import RecipesListings from './components/RecipesListings';


function App() {
  
  return (
    <div className="app">
      <Header/>
      <RecipesListings/>
      
    </div>
  );
}

export default App;
