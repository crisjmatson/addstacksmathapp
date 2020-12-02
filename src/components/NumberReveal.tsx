import React, { useState, useEffect } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import NumberSelect from "./NumberSelect";
import { Grid } from "@material-ui/core";

interface Props {
	revealNums: string[][];
	gameSet: () => void;
	guesses: number[] | null;
	setGuesses: React.Dispatch<React.SetStateAction<number[] | null>>;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			/* display: "flex",
			flexDirection: "row", */
			"& > *": {
				margin: theme.spacing(10),
				padding: theme.spacing(1),
				width: theme.spacing(16),
				height: theme.spacing(16),
			},
		},
		containerGrid: {
			width: "80vw",
		},
		paperStyle: {
			margin: theme.spacing(10),
			padding: theme.spacing(1),
			width: theme.spacing(6),
			height: theme.spacing(6),
		},
	})
);

function NumberReveal(props: Props) {
	const classes = useStyles();
	return (
		<div>
			<NumberSelect guesses={props.guesses} setGuesses={props.setGuesses} />
			<Grid container direction="row" className={classes.containerGrid}>
				{props.revealNums.map((num) => (
					<Grid
						container
						item
						xs={4}
						justify="center"
						direction="row"
						key={props.revealNums.indexOf(num).toString()}
					>
						{num.map((char) => {
							return (
								<Grid item xs={4}>
									<Paper className={classes.paperStyle} key={char.toString()}>
										<br />
										{char}
									</Paper>
								</Grid>
							);
						})}
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default NumberReveal;
