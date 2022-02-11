function Buttons({filteredCocktails}) {
	return(
		<div className="myFilter">
			<button className="myChange" onClick={() => filteredCocktails("rum")}>Rum</button>
			<button className="myChange" onClick={() => filteredCocktails("vodka")}>Vodka</button>
			<button className="myChange" onClick={() => filteredCocktails("tequila")}>Tequila</button>
			<button className="myChange" onClick={() => filteredCocktails("gin")}>Gin</button>
			<button className="myChange" onClick={() => filteredCocktails("whiskey")}>Whiskey</button>
			<button className="myChange" onClick={() => filteredCocktails("pisco")}>Pisco</button>
			<button className="myChange" onClick={() => filteredCocktails("champagne")}>Champagne</button>
			<button className="myChange" onClick={() => filteredCocktails("sambuca")}>Sambuca</button>
		</div>)
}
export default Buttons;