import React from "react";
import { useState } from "react";
import { data } from "./data";
import './App.css';
import Cocktails from "./Cocktails.js";
import Buttons from "./Buttons";


function App() {
  const [cocktail, setCocktail] = useState(data);
  return (
    <div className="product">
      <h2>test</h2>
      <Buttons />
      <Cocktails anyCocktail={cocktail} />  
    </div>
  );
}

export default App;
