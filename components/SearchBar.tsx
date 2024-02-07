"use client";
import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
	<button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
		<Image
			src="/magnifying-glass.svg"
			alt="magnifying glass"
			height={40}
			width={40}
			className="object-contain"
		/>
	</button>
);

const SeachBar = ({ setManufacturer, setModel }) => {
	const [searchmanufacturer, setSearchManufacturer] = useState("");
	const [searchmodel, setSearchModel] = useState("");

	const router = useRouter();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (searchmanufacturer === "" && searchmodel === "") {
			return alert("Please fill in the search bar!!");
		}
		
		setManufacturer(searchmanufacturer);
		setModel(searchmodel);
	};

	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer
					selected={searchmanufacturer}
					setSelected={setSearchManufacturer}
				/>

				<SearchButton otherClasses="sm:hidden" />
			</div>

			<div className="searchbar__item">
				<Image
					src="/model-icon.png"
					alt="car model"
					width={25}
					height={25}
					className="absolute w-[20px] h-[20px] ml-4"
				/>
				<input
					type="text"
					name="model"
					id=""
					value={searchmodel}
					onChange={(e) => setSearchModel(e.target.value)}
					placeholder="Model"
					className="searchbar__input"
				/>
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<SearchButton otherClasses="max-sm:hidden" />
		</form>
	);
};

export default SeachBar;
