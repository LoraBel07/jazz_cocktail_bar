function Cocktails({anyCocktail}) {
	
	return( 
		<div className="products">
			{anyCocktail.map((element => {
				const { id, title, image } = element;
				return(
					<div key={id} className="item">					
					<img src={ image } alt="cocktail" width="300px" />
					<h2>{ title }</h2>
					</div>
				)
			}))}
		</div>
	)

}

export default Cocktails;