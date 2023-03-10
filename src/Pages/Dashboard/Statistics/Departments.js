import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import Btn from '../../../components/Btn';

const Departments = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch('/data/department.json')
            .then((res) => res.json())
            .then((data) => setDepartments(data));
    }, []);

    const COLORS = ['#0088FE', '#F87171', '#FFBB28', '#FF8042', '#00C49F'];

    const totalEmployees = departments.reduce((prev, current) => prev + current.totalEmployee, 0);

    return (
        <>
            <h3 className='font-medium text-left'>DEPARTMENTS</h3>
            <ResponsiveContainer width='100%' height={200}>
                <PieChart>
                    <Pie data={departments} innerRadius={60} outerRadius={80} fill='#8884d8' paddingAngle={5} dataKey='totalEmployee'>
                        {departments.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div>
                <h2 className='text-3xl'>
                    {totalEmployees} <span className='text-sm'>+3.7%</span>
                </h2>
                <p className='text-xs'>Total departments <span className="font-medium">{departments.length}</span> & employees <span className="font-medium">{totalEmployees}</span>.</p>
                <Link to="/dashboard/departments" className='text-xs text-red-400'>View All</Link>
            </div>
            <Link to="/dashboard/departments"><Btn color='blue'>View More</Btn></Link>
        </>
    );
};

export default Departments;