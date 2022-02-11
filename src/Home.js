import Cocktails from "./Cocktails";
import Buttons from "./Buttons";
import { data } from './data';
import { useState } from "react";

function Home() {
	const [cocktails, setCocktails] = useState(data);
}