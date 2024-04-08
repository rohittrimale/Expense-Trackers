import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = ({ chartData }) => {
  return (
    <div>
      <Chart chartExpenses={chartData} />
    </div>
  );
};

export default ExpensesChart;
