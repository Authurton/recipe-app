import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import RecipesListings from './components/RecipesListings';

function App() {
  const [query, setQuery] = useState("")

  const setSearchQuery = (searchTerm) => {
      setQuery(searchTerm)
  }

  return (
    <div className="app">
      <Header setSearchQuery={setSearchQuery} query={query} />
      <RecipesListings query={query} />
      
    </div>
  );
}

export default App;
