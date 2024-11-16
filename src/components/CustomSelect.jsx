import React, { useState, useRef, useEffect } from "react";

const CustomSelect = ({
	options,
	isMulti = false,
	placeholder = "Select...",
	onChange,
	}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(isMulti ? [] : null);
	const [searchValue, setSearchValue] = useState("");
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleOptionClick = (option) => {
		if (isMulti) {
			const isAlreadySelected = selected.some((item) => item.value === option.value);
			const updatedSelection = isAlreadySelected
				? selected.filter((item) => item.value !== option.value)
				: [...selected, option];
			setSelected(updatedSelection);
			onChange(updatedSelection);
		} else {
			setSelected(option);
			onChange(option);
			setIsOpen(false);
		}
	};

	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(searchValue.toLowerCase())
	);

	return (
		<div>
			<div className="custom-select" ref={dropdownRef}>
				<div className="select-box" onClick={() => setIsOpen((prev) => !prev)}>
					<div className="selected-value">
						{isMulti
						? selected.length > 0
						? selected.map((item) => item.label).join(", ")
						: placeholder
						: selected
						? selected.label
						: placeholder}
					</div>
					<div className="arrow">{isOpen ? "▲" : "▼"}</div>
				</div>

				{isOpen && (
					<div className="dropdown">
						<input
							type="text"
							className="search-box"
							placeholder="Search..."
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
						<ul className="options-list">
							{filteredOptions.length > 0 ? (
								filteredOptions.map((option) => (
									<li key={option.value} className={`option ${
										isMulti ? selected.some((item) => item.value === option.value) ? "selected" : ""
										: selected?.value === option.value ? "selected" : "" }`}
										onClick={() => handleOptionClick(option)}>
										{option.label}
									</li>
								))) : (
							<li className="no-options">No options found</li>
							)}
						</ul>
					</div>
				)}
			</div>
			<div>
				<p>Test Block</p>
			</div>
		</div>
	);
};

export default CustomSelect;
