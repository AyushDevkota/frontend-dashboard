import { useState } from "react";
import classes from "./App.module.css";
import NameCard from "./components/Profile Card/NameCard";
import TimeCard from "./components/Profile Card/TimeCard";
import TopHalf from "./components/TopHalf";
import BottomHalf from "./components/BottomHalf";
import { Work, Study, Social, SelfCare, Play, Exercise } from "./images/index";
import data from "./data.json";

const styles = [
	{
		id: 1,
		bgColor: "hsl(15, 100%, 70%)",
		bgImg: Work,
	},
	{
		id: 2,
		bgColor: "hsl(195, 74%, 62%)",
		bgImg: Play,
	},
	{
		id: 3,
		bgColor: "hsl(348, 100%, 68%)",
		bgImg: Study,
	},
	{
		id: 4,
		bgColor: "hsl(145, 58%, 55%)",
		bgImg: Exercise,
	},
	{
		id: 5,
		bgColor: "hsl(264, 64%, 52%)",
		bgImg: Social,
	},
	{
		id: 6,
		bgColor: "hsl(43, 84%, 65%)",
		bgImg: SelfCare,
	},
];

function App() {
	const [active, setActive] = useState("daily");

	return (
		<main>
			<div className={`${classes.card} ${classes.profile}`}>
				<NameCard />
				<TimeCard activeHandler={setActive} active={active} />
			</div>
			{styles.map((item, index) => {
				const timeframe = data[index].timeframes;
				const title = data[index].title;
				const classname = `card-${title.replace(/\s/g, "")}`;
				return (
					<div
						key={item.id}
						className={`${classes.card} ${classes[classname]}`}
					>
						<TopHalf bgImg={item.bgImg} bgColor={item.bgColor} />
						<BottomHalf
							title={title}
							timeframe={timeframe[active]}
							active={active}
						/>
					</div>
				);
			})}
		</main>
	);
}

export default App;
