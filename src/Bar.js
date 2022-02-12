import Cocktails from "./Cocktails";
import Buttons from "./Buttons";
import neon from "./neon.png"
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
		<div>
			
			<div className="prod">					
				<div class="input-field">			
					<h3>Chouse your cocktail </h3>
					<img src={ neon } alt="neon" width="400px" />			
					{/* <input id="search" type="text" placeholder="Enter cocktail title here..." /> */}
					</div>
			<Buttons filteredCocktails={chosenCocktails}/>
			<Cocktails anyCocktail={cocktail} />
			</div>
		</div>
	);
}

export default Bar;