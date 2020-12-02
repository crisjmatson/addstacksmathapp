import React from "react";

interface Props {
	setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
}

function Instructions(props: Props) {
	return (
		<div>
			<p>
				Choose numbers and try to guess every number with no strikes! After
				three strikes, you're out!
			</p>
			<button onClick={() => props.setStartGame(false)}>START</button>
		</div>
	);
}

export default Instructions;
