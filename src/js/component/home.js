import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const turnOff = () => {
		setLight1("light red off");
		setLight2("light yellow off");
		setLight3("light green off");
	};

	const [lightRed, setLight1] = useState("light red off");
	const changeRed = () => {
		if (lightRed === "light red off") {
			setLight1("light red");
			setLight2("light yellow off");
			setLight3("light green off");
		} else {
			setLight1("light red off");
			setLight2("light yellow off");
			setLight3("light green off");
		}
	};

	const [lightYellow, setLight2] = useState("light yellow off");
	const changeYellow = () => {
		if (lightYellow === "light yellow off") {
			setLight1("light red off");
			setLight2("light yellow");
			setLight3("light green off");
		} else {
			setLight2("light yellow off");
		}
	};
	const [lightGreen, setLight3] = useState("light green off");
	const changeGreen = () => {
		if (lightGreen === "light green off") {
			setLight1("light red off");
			setLight2("light yellow off");
			setLight3("light green");
		} else {
			setLight3("light green off");
		}
	};
	return (
		<>
			<div className="text-center mt-5">
				<div className="toplight">
					<div className="lightContainer">
						<div className={lightRed} onClick={changeRed} />
						<div className={lightYellow} onClick={changeYellow} />
						<div className={lightGreen} onClick={changeGreen} />
					</div>
				</div>
			</div>
			<div className="btn-group" role="group">
				<button type="button" className="btn btn-success" id="auto">
					Auto
				</button>
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => turnOff()}>
					Off
				</button>
				{/* <button
					type="button"
					className="btn btn-warning"
					onClick={() => turnOn()}>
					On
				</button> */}
			</div>
		</>
	);
}
