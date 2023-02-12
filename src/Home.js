import cat from "./cat-case4.png";
import sax from "./saxophone.png";
function Home() {
	return(
		<div>
			<div>
			<img src={ sax } className="sax" alt="Saxophone" width="50px" margin-top="-1%" />
			</div>
			
		<div className="catHome">			
			<h3>All we need is here...</h3>
			<img src={ cat } className="manCat" alt="Cat in case" width="1000px"/>

		</div>	
		</div>
	)
}
export default Home;