function Cocktails({anyCocktail}) {
	return( 
		<div className="products">
			{anyCocktail.map((element => {
				const { id, title, image } = element;
				return(
					<div key={id}>
					<h2>{id} { title }</h2>
					<img src={ image } alt="cocktail" width="300px" />
					</div>
				)
			}))}
		</div>
	)

}

export default Cocktails;