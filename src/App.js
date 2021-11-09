import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import RecipeDetail from "./components/RecipeDetail";
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
      <RecipeDetail/>
    </div>
  );
}

export default App;
