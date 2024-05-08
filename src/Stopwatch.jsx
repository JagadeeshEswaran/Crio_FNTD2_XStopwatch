/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Stopwatch = () => {
	const [myClock, setClock] = useState(0);
	const [isTimerOn, setTimerOn] = useState(false);

	const handleClockStart = () => {
		setTimerOn((prevState) => !prevState);
	};

	const handleClockReset = () => {
		setClock(0);
		setTimerOn(false);
	};

	const convertIntoMinsSec = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
	};

	useEffect(() => {
		let myTimer;

		if (isTimerOn) {
			myTimer = setInterval(() => {
				setClock((prevTime) => prevTime + 1);
			}, 1000);
		} else {
			clearInterval(myTimer);
		}

		return () => clearInterval(myTimer);
	}, [isTimerOn]);

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

				<p>Time: {convertIntoMinsSec(myClock)}</p>

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
