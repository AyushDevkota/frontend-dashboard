import React from "react";
import classes from "./timecard.module.css";

const TimeCard = ({ activeHandler, active }) => {
	const changeActive = (event) => {
		activeHandler(event.target.dataset.active);
	};

	return (
		<div className={classes.timeCard}>
			<button
				className={active === "daily" ? classes.active : ""}
				data-active="daily"
				onClick={changeActive}
			>
				Daily
			</button>
			<button
				className={active === "weekly" ? classes.active : ""}
				data-active="weekly"
				onClick={changeActive}
			>
				Weekly
			</button>
			<button
				className={active === "monthly" ? classes.active : ""}
				data-active="monthly"
				onClick={changeActive}
			>
				Monthly
			</button>
		</div>
	);
};

export default TimeCard;
