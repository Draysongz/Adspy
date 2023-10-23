import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Month", "Budget"],
  ["Jan", 3700000],
  ["Feb", 3300000],
  ["Mar", 3600000],
  ["Apr", 2700000],
  ["May", 1400000],
  ["Jun", 3400000],
  ["Jul", 3000000],
  ["Aug", 3600000],
  ["Sep", 3700000],
  ["Oct", 700000],
  ["Nov", 3400000],
  ["Dec", 1600000],
];

export const options = {
  chart: {
    title: "Achievement +60%",
  },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};

export function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
