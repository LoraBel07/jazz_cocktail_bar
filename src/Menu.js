import catInCase from "./cat-case.png";
import sax from "./saxophone.png";
import chef from "./chef.jpg";
import { useState } from 'react';
import { dataMenu } from "./dataMenu";  

function Menu() {
	const [dishes, setDishes] = useState(dataMenu);

	const setShowMore = (id) => {
		const newDishes = [];
		dishes.forEach(dishes => {
			if (dishes.id === id) {
			const changedDishes = { ...dishes, showMore: !dishes.showMore};
			newDishes.push(changedDishes);
		} else {
			newDishes.push(dishes);
		}
		});
		setDishes(newDishes);
	}

	return(
		<div>
			<img src={ sax } className="sax" alt="Saxophone" width="50px" />
			<img src={ catInCase } className="catInCase" alt="cat in case" width="270px"/>
			<img src={ chef } className="chef" alt="chef" width="280px"/>

		<div className='container'>
			<h2>👨‍🍳 We are always thinking about your health! 🍲</h2>
		</div> 

		<div className="contMenu">
			{dishes.map((element => {
				const { id, title, image, description, showMore } = element;
				return(
					<div className="contBox" key={id}>
						<div className="title">
							<h3>{title}</h3>
						</div>
						<div>
							<img src={image} alt="dishes" height="250px" />
						</div>
						<div className="contText">
							<h6 className="contTextMenu">{ showMore ? description.substring(0,90) + "..." : description } 
							<button className="show" onClick={() => setShowMore(id)}>{showMore ? "Show more" : "Show less"}</button>
							</h6>
						</div>

					</div>
				)
			}))}

		</div>






		</div>



	)
	
}
export default Menu;