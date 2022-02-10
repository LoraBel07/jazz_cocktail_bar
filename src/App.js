import React from "react";
import { useState } from "react";
import { data } from "./data";
import './App.css';
import Cocktails from "./Cocktails.js";

function App() {
  const [cocktail, setCocktail] = useState(data);
  return (
    <div className="product">
      <h3>test</h3>
      <Cocktails anyCocktail={cocktail} />  
    </div>
  );
}

export default App;
