/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Stopwatch = () => {
	const [isTimerOn, setTimerOn] = useState(false);
	const [myClock, setClock] = useState(0);

	const handleClockStart = () => {
		setTimerOn(!isTimerOn);
		setClock((prevTime) => prevTime + 1);
	};

	const handleClockReset = () => {
		setTimerOn(false);
		setClock(0);
	};

	const convertIntoMinsSec = (timeInNumber) => {
		let reminder = timeInNumber % 60;
		let mins = Math.floor(timeInNumber / 60);

		// console.log(reminder);

		return `${mins} : ${reminder < 10 ? "0" + reminder : reminder}`;
	};

	useEffect(() => {
		let myTimer;

		if (isTimerOn) {
			myTimer = setInterval(() => {
				setClock((prevTime) => prevTime + 1);
			}, 1000);
		}

		return () => clearInterval(myTimer);
	}, [myClock]);

	return (
		<section
		// style={{
		// 	display: "flex",
		// 	justifyContent: "center",
		// 	alignItems: "center",
		// 	// height: "100vh",
		// }}
		>
			<article>
				<h6 style={{ fontSize: "1.5rem", margin: "0", marginTop: "1rem" }}>
					Stopwatch
				</h6>

				{/* <h4 style={{ fontSize: "1.5rem" }}>00 : 00</h4> */}
				<h4 style={{ fontSize: "1.5rem" }}>
					Time: {convertIntoMinsSec(myClock)}
				</h4>

				<article
				// style={{
				// 	width: "100%",
				// 	display: "flex",
				// 	justifyContent: "center",
				// 	alignItems: "center",
				// }}
				>
					<button
						// style={{
						// 	marginRight: "1rem",
						// 	background: `${isTimerOn ? "red" : "green"}`,
						// 	color: "white",
						// 	padding: "1rem 2rem",
						// 	borderRadius: "4px",
						// 	fontSize: "1rem",
						// }}
						onClick={() => handleClockStart()}>
						{isTimerOn ? "Stop" : "Start"}
					</button>
					<button
						onClick={() => handleClockReset()}
						// style={{ padding: "1rem 2rem" }}
					>
						Reset
					</button>
				</article>
			</article>
		</section>
	);
};

export default Stopwatch;
