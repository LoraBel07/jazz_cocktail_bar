import cat from "./cat-case3.png";
import sax from "./saxophone.png";
function Home() {
	return(
		<div className="catHome">
			<img src={ sax } className="sax" alt="Saxophone" width="45px" />
			<h2>All we need is here...</h2>
			<img src={ cat } className="manCat" alt="Cat in case" width="950px"/>

		</div>		
	)
}
export default Home;