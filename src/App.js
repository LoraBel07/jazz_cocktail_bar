import React from "react";
import { useState } from "react";
import { data } from "./data";
import './App.css';
import Cocktails from "./Cocktails.js";
import Buttons from "./Buttons";


function App() {
  const [cocktail, setCocktails] = useState(data);

  const chosenCocktails = (searchTerm) => {
    const newCocktails = data.filter(element => element.searchTerm === searchTerm);
    setCocktails(newCocktails);
  }


  return (
    <div className="product">
      <h2>test</h2>
      <Buttons filteredCocktails={chosenCocktails}/>
      <Cocktails anyCocktail={cocktail} />  
    </div>
  );
}

export default App;
