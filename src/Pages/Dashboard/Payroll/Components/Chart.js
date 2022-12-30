import React from 'react';
import {
    BarChart,
    Bar,
    Brush,
    ReferenceLine,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const Chart = ({ employees }) => {
    // slicing only needed data from employees to show
    const data = employees.map(employee => {
        return {
            name: employee?.fullName?.split(" ")[0],
            salary: employee?.salary,
            deduction: -(Math.ceil((employee?.salary / 30) * employee?.absent))
        }
    })

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 30,
                    right: 30,
                    left: 20,
                    bottom: 30,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <ReferenceLine y={0} stroke="#000" />
                <Brush dataKey="name" height={30} stroke="#8884d8" />
                <Bar dataKey="salary" fill="#3b82f6" />
                <Bar dataKey="deduction" fill="#f43f5e" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Chart;