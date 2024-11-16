import './App.css'
import React, { useState } from "react";
import CustomSelect from "./components/CustomSelect";

function App() {
	const options = [
		{ label: "Appel", value: "apple" },
		{ label: "Banana", value: "banana" },
		{ label: "Mango", value: "mango" },
		{ label: "Orange", value: "orange" },
		{ label: "Lychee", value: "lychee" },
		{ label: "Grapes", value: "grapes" },
		{ label: "Pineapple", value: "pineapple" },
		{ label: "Watermelon", value: "watermelon" },
		{ label: "Strawberry", value: "strawberry" },
		{ label: "Blueberry", value: "blueberry" },
		{ label: "Peach", value: "peach" },
		{ label: "Cherry", value: "cherry" },
		{ label: "Papaya", value: "papaya" },
		{ label: "Kiwi", value: "kiwi" },
		{ label: "Coconut", value: "coconut" },
	];

	const [selectedOption, setSelectedOption] = useState(null);

	return (
		<div style={{ padding: "50px" }}>
			<h1>Custom Select Component</h1>
			<CustomSelect
				options={options}
				isMulti={true}
				placeholder="Select One Option"
				onChange={(selected) => setSelectedOption(selected)}
			/>
		</div>
	);
}

export default App;

