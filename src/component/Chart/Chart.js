import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = ({ chartExpenses }) => {
  const expensesOnlyArray = chartExpenses.map((monthExpenseData) => {
    return monthExpenseData.price;
  });

  const maxValue = Math.max(...expensesOnlyArray);

  const chartData = [
    { expensesMonth: "Jan", expensesValue: 0 },
    { expensesMonth: "Feb", expensesValue: 0 },
    { expensesMonth: "Mar", expensesValue: 0 },
    { expensesMonth: "Apr", expensesValue: 0 },
    { expensesMonth: "May", expensesValue: 0 },
    { expensesMonth: "Jun", expensesValue: 0 },
    { expensesMonth: "July", expensesValue: 0 },
    { expensesMonth: "Aug", expensesValue: 0 },
    { expensesMonth: "Sep", expensesValue: 0 },
    { expensesMonth: "Oct", expensesValue: 0 },
    { expensesMonth: "Nov", expensesValue: 0 },
    { expensesMonth: "Dec", expensesValue: 0 },
  ];

  for (let expense of chartExpenses) {
    chartData[expense.date.getMonth()].expensesValue += expense.price;
  }

  return (
    <div className="chart">
      {chartData.map((monthData) => {
        return (
          <ChartBar
            key={monthData.expensesMonth}
            label={monthData.expensesMonth}
            value={monthData.expensesValue}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
