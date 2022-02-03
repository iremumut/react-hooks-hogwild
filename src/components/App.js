import React, { useState } from "react";
import Nav from "./Nav";
import HogsList from "./HogsList";
import Filters from "./Filters";

import hogs from "../porkers_data";

function App() {

	const [hogsList, setHogsList] = useState(hogs);
	const [greasedHogShow, setGreasedHogShow] = useState(false);
	const [nameSort, setNameSort] = useState(false);
	const [weightSort, setWeightSort] = useState(false);



	let displayHogs = hogsList.filter((hog) => {
		if(greasedHogShow) {
			return hog.greased;
		}else{
			return hog;
		}
		
	})

	if(nameSort){
		displayHogs.sort((a, b) => {
			let fa = a.name.toLowerCase(),
				fb = b.name.toLowerCase();
		
			if (fa < fb) {
				return -1;
			}
			if (fa > fb) {
				return 1;
			}
			return 0;
		});
	}

	if(weightSort){
		displayHogs.sort((a,b) => {
			return a.weight - b.weight;
		})
	}

	function nameSortChange(){
		setNameSort((prev) => !prev);
	}

	function weightSortChange(){
		setWeightSort((prev) => !prev);
		console.log(weightSort);
	}

	function filterGreasedHogs(){
		setGreasedHogShow((prev) => !prev);
	}

	return (
		<div className="App">
			<Nav />
			<Filters greasedFilter={filterGreasedHogs} greasedHogs={greasedHogShow} 
			nameSort={nameSort} weightSort={weightSort}
			weightSortChange={weightSortChange} nameSortChange={nameSortChange}/>
			<HogsList hogs={displayHogs}/>
		</div>
	);
}

export default App;
