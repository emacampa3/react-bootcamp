import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
          key={dataPoint.label}
					value={dataPoint.value}
					maxValue={null}
					label={dataPoint.label}
				/>
			))}
			{/* dynamically going through the array and mapping it */}
		</div>
	);
};

export default Chart;
