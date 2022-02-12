import catInCase from "./cat-case.png";
import sax from "./saxophone.png";
import { data } from "./dataMusic";
import { useState } from 'react';


function Music() {
	const [performances, setPerformances] = useState(0);
	const { id, title, image, description } = data[performances];

	const previousPerformance = () => {
		setPerformances((performances => {
			performances--;
		  if (performances < 0) {
			return data.length - 1;
		  }
		  return performances;
		}))
	  }
	
	  const nextPerformance = () => {
		setPerformances((performances => {
			performances++;
		  if (performances > data.length - 1) {
			performances = 0;
		  }
		  return performances;
		}))
	  }

	return(
		<div>
			<img src={ sax } className="sax" alt="Saxophone" width="50px" />
			<img src={ catInCase } className="catInCase" alt="cat in case" width="300px"/>

			<div>
			
			<div className="container">
				<h2 className="contTitle">{title}</h2>
			</div>
			<div className="container">
				<img src={image} height="250px" alt="performance"/>
			</div>
			<div className="container">
				<h4 className="contText">{description}</h4>
			</div>

			<div className="btn container">
				<button className="pointers" onClick={previousPerformance}>Previous</button>
				<button className="pointers" onClick={nextPerformance}>Next</button>
				</div>

			</div>





		</div>
		
	)
}
export default Music;