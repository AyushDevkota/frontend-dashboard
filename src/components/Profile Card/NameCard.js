import React from "react";
import classes from "./namecard.module.css";
import { Jeremy } from "../../images/index";

const NameCard = () => {
	return (
		<div className={classes.profileCard}>
			<img src={Jeremy} alt="profile" className={classes.profileCard__img} />
			<div>
				<p className={classes.light}>Report for </p>
				<p className={classes.name}>Jeremy Robson</p>
			</div>
		</div>
	);
};

export default NameCard;
