import React, { useState } from "react";
import Button from "@material-ui/core/Button";

interface Props {
	guesses: number[] | null;
	setGuesses: React.Dispatch<React.SetStateAction<number[] | null>>;
}
interface ButtonInterface {
	value: number;
	picked: boolean;
}

const ButtonElements: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
	"button"
);

function NumberSelect(props: Props) {
	//let buttonNums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const [buttonNums, setButtonNums] = useState<ButtonInterface[]>([
		{
			value: 1,
			picked: false,
		},
		{
			value: 2,
			picked: false,
		},
		{
			value: 3,
			picked: false,
		},
		{
			value: 4,
			picked: false,
		},
		{
			value: 5,
			picked: false,
		},
		{
			value: 6,
			picked: false,
		},
		{
			value: 7,
			picked: false,
		},
		{
			value: 8,
			picked: false,
		},
		{
			value: 9,
			picked: false,
		},
		{
			value: 0,
			picked: false,
		},
	]);

	/* 	let buttonNums: buttonInterface[] = [
		{
			value: 1,
			picked: false,
		},
		{
			value: 2,
			picked: false,
		},
		{
			value: 3,
			picked: false,
		},
		{
			value: 4,
			picked: false,
		},
		{
			value: 5,
			picked: false,
		},
		{
			value: 6,
			picked: false,
		},
		{
			value: 7,
			picked: false,
		},
		{
			value: 8,
			picked: false,
		},
		{
			value: 9,
			picked: false,
		},
		{
			value: 0,
			picked: false,
		},
	]; */
	const buttonChange = (num: number) => {
		let newButtonNums: ButtonInterface[] = buttonNums;
		newButtonNums.filter((button) => {
			if (button.value === num) {
				return (button.picked = true);
			} else {
				return button;
			}
		});
		setButtonNums(newButtonNums);
		let selectedButton = document.querySelector(`numSelectKey${num}`);
		console.log("====================================");
		console.log(`numSelectKey${num}`, selectedButton);
	};
	const addGuess = (guessNum: number) => {
		//buttonChange(guessNum);
		if (props.guesses === null) {
			return props.setGuesses([guessNum]);
		} else {
			let newGuessSet: number[] = props.guesses;
			if (newGuessSet.includes(guessNum) === false) {
				newGuessSet.push(guessNum);
			}
			return props.setGuesses(newGuessSet);
		}
	};
	return (
		<div>
			{buttonNums.map((buttonNumber) => {
				return (
					<Button
						key={"numSelectKey" + buttonNumber.value.toString()}
						className={buttonNumber.value.toString()}
						onClick={(e) => {
							buttonChange(buttonNumber.value);
							addGuess(buttonNumber.value);
						}}
						color={buttonNumber.picked ? "primary" : "secondary"}
						/* value={buttonNumber} */
					>
						{buttonNumber.value}
					</Button>
				);
			})}
			<button onClick={() => console.log(props.guesses)}>test</button>
			{/* 
			<Button className="charOne">1</Button>
			<Button className="charTwo">2</Button>
			<Button className="charThree">3</Button>
			<Button className="charFour">4</Button>
			<Button className="charFive">5</Button>
			<Button className="charSix">6</Button>
			<Button className="charSeven">7</Button>
			<Button className="charEight">8</Button>
			<Button className="charNine">9</Button>
			<Button className="charZero">0</Button> */}
		</div>
	);
}

export default NumberSelect;
