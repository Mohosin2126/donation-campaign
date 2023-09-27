import React, { PureComponent, useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Example = () => {
  const [statisticsData, setStatisticsData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("Donation")) || [];
    setStatisticsData(storedData);
  }, []);

  const data = [
    { name: 'Group A', value: statisticsData.length },
    { name: 'Group B', value: 12 - statisticsData.length },
  ];

  const colors = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#00C49F"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-24 flex justify-center items-center gap-10">
        <div className="flex justify-center items-center gap-2">
          <h1>Your Donation: </h1>
          <div className="bg-teal-400 h-2 w-20 mt-1"></div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2">
            <h1>Total Donation:</h1>
            <div className="bg-red-500 h-2 w-20 mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
