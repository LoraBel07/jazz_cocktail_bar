import Cocktails from "./Cocktails";
import Buttons from "./Buttons";
import { data } from './data';
import { useState } from "react";
import './App.css';

function Bar() {
	const [cocktail, setCocktails] = useState(data);

	const chosenCocktails = (searchTerm) => {
    const newCocktails = data.filter(element => element.searchTerm === searchTerm);
    setCocktails(newCocktails);
}

	return (
    <div className="prod">		
		<div class="input-field">
			<h3>Chouse your cocktail </h3>			
			<input id="search" type="text" placeholder="Enter cocktail title here..." />
        </div>
		<Buttons filteredCocktails={chosenCocktails}/>
		<Cocktails anyCocktail={cocktail} />  
    </div>
	);
}

export default Bar;