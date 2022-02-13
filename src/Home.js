import cat from "./cat-case3.png";
import sax from "./saxophone.png";
function Home() {
	return(
		<div>
			<div>
			<img src={ sax } className="sax" alt="Saxophone" width="50px" />
			</div>
			
		<div className="catHome">			
			<h3>All we need is here...</h3>
			<img src={ cat } className="manCat" alt="Cat in case" width="950px"/>

		</div>	
		</div>
	)
}
export default Home;