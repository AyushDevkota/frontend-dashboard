import React from "react";
import classes from "./tophalf.module.css";

const TopHalf = ({ bgImg, bgColor }) => {
	return (
		<div className={classes.top} style={{ backgroundColor: bgColor }}>
			<img src={bgImg} alt="" className={classes.top__img} />
		</div>
	);
};

export default TopHalf;
