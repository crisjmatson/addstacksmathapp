import React, { useState, useEffect } from "react";
import "./App.css";
import Instructions from "./components/Instructions";
import NumberReveal from "./components/NumberReveal";
//import { Answers } from "./components/Interfaces";

function App() {
	const [nums, setNums] = useState<number[]>([111, 111, 111]);
	const [guesses, setGuesses] = useState<number[] | null>(null);
	const [revealNums, setRevealNums] = useState<string[][]>([["1"]]);
	const [startGame, setStartGame] = useState<boolean>(true);
	let gameTally: number = 0;

	useEffect(() => {
		gameSet();
		return () => {
			gameTally++;
		};
	}, []);

	const gameSet = () => {
		let result: number = parseInt(
			Math.floor(Math.random() * 100000)
				.toString()
				.substring(0, 3)
		);
		let first: number = Math.floor(
			Math.random() * (Math.floor(result) - Math.ceil(1)) + Math.ceil(1)
		);
		let second: number = result - first;
		revealSet([first, second, result]);
	};

	const revealSet = (nums: number[]) => {
		let reveal: string[][] = [];
		nums.map((num: number) => {
			let numArr: string[] = num.toString().split("");
			while (numArr.length < 3) {
				numArr.unshift("0");
			}
			return reveal.push(numArr);
		});
		console.log("revealSet: ", reveal[0], reveal[1], reveal[2]);
		return setRevealNums(reveal);
	};

	return (
		<div className="App">
			{startGame ? (
				<Instructions setStartGame={setStartGame} />
			) : (
				<div>
					{" "}
					<button
						onClick={() => {
							gameTally++;
							gameSet();
						}}
					>
						new game
					</button>
					<p>games played: {gameTally}</p>
					<NumberReveal revealNums={revealNums} gameSet={gameSet} guesses={guesses} setGuesses={setGuesses}/>
				</div>
			)}
		</div>
	);
}

export default App;
