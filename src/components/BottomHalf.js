import React from "react";
import classes from "./bottomhalf.module.css";
import { Ellipsis } from "../images/index";

const BottomHalf = ({ title, timeframe, active }) => {
	const day =
		active === "daily"
			? "Yesterday"
			: active === "weekly"
			? "Last Week"
			: "Last Month";

	return (
		<div className={classes.bottom}>
			<p className={classes.bottom__title}>{title}</p>
			<p className={classes.bottom__time}>{timeframe.current} hrs</p>
			<img src={Ellipsis} alt="" className={classes.bottom__img} />
			<p className={classes.bottom__previous}>
				{day} - {timeframe.previous} hrs
			</p>
		</div>
	);
};

export default BottomHalf;
