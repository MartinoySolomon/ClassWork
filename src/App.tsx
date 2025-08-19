import { useState, useMemo } from "react";

import "./App.css";

function App() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	function slowFunction(number: number): number {
		for (let i = 0; i < 2000000000; i++) {}
		return number * 2;
	}
	const themeStyles = {
		backgroundColor: dark ? "black" : "white",
		color: dark ? "white" : "black",
	};
	const doubleNumber: number = useMemo(() => {
		return slowFunction(number);
	}, [number]);
	return (
		<>
			<div style={themeStyles}>
				<input
					type="text"
					value={number}
					onChange={(e) => setNumber(parseInt(e.target.value))}></input>
				<button
					onClick={() => {
						setDark(!dark);
					}}>
					Change Theme
				</button>
				<div>{doubleNumber}</div>
			</div>
		</>
	);
}

export default App;
