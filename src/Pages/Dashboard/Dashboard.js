import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi';
import { BsCalendarDate, BsHandThumbsUp } from 'react-icons/bs';
import { curveCardinal } from 'd3-shape';

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Pie,
    Cell,
    PieChart,
    AreaChart,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from 'recharts';
import { Progress } from 'flowbite-react';
import Btn from '../../components/Btn';
import { Link } from 'react-router-dom';
import Employees from './Employess/Employees';

const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
];

const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const cardinal = curveCardinal.tension(0.2);

const Dashboard = () => {
    return (
        <div className='py-10'>
            <h3 className='text-3xl'>Welcome Jason Porter!</h3>
            <small className='text-xs'>Measure How Fast You’re Growing Monthly Recurring Revenue. Learn More</small>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-8 mt-5'>
                <Link className='bg-white rounded-lg text-gray-500'>
                    <div className='flex flex-col items-center hover:scale-110 duration-300 overflow-hidden p-8'>
                        <HiOutlineUsers className='w-8 h-8 mb-1' />
                        <p>Users</p>
                    </div>
                </Link>
                <Link className='bg-white rounded-lg text-gray-500'>
                    <div className='flex flex-col items-center hover:scale-110 duration-300 overflow-hidden p-8'>
                        <BsHandThumbsUp className='w-8 h-8 mb-1' />
                        <p>Holidays</p>
                    </div>
                </Link>
                <Link className='bg-white rounded-lg text-gray-500'>
                    <div className='flex flex-col items-center hover:scale-110 duration-300 overflow-hidden p-8'>
                        <BsCalendarDate className='w-8 h-8 mb-1' />
                        <p>Events</p>
                    </div>
                </Link>
                <Link className='bg-white rounded-lg text-gray-500'>
                    <div className='flex flex-col items-center hover:scale-110 duration-300 overflow-hidden p-8'>
                        <HiOutlineUsers className='w-8 h-8 mb-1' />
                        <p>Report</p>
                    </div>
                </Link>
                <Link className='bg-white rounded-lg text-gray-500'>
                    <div className='flex flex-col items-center hover:scale-110 duration-300 overflow-hidden p-8'>
                        <BsHandThumbsUp className='w-8 h-8 mb-1' />
                        <p>Payroll</p>
                    </div>
                </Link>
            </div>

            <div className='grid grid-cols-12 mt-8 gap-8'>

                <div className='col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-6 p-5 bg-white rounded-lg'>
                    <h3 className='font-medium text-left'>REVENUE</h3>
                    <div className='w-full h-96'>
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                                data={data}
                                margin={{
                                    top: 30,
                                    right: 15,
                                    bottom: 15,
                                    left: 5
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis
                                    dataKey="name"
                                    label={{ position: "insideBottomRight", offset: 0 }}
                                    scale="band"
                                />
                                <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
                                <Tooltip />
                                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-3 bg-white rounded-lg p-5 text-center flex flex-col justify-between'>
                    <h3 className='font-medium text-left'>REVENUE</h3>
                    <ResponsiveContainer width='100%' height={200}>
                        <PieChart>
                            <Pie
                                data={data2}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data2.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div>
                        <h2 className='text-3xl'>124,301 <span className='text-sm'>+3.7%</span></h2>
                        <p className='text-xs'>Lorem Ipsum is simply dummy text</p>
                        <p className='text-xs text-red-400'>Read more</p>
                    </div>
                    <Btn color="blue">View More</Btn>
                </div>
                <div className='col-span-12 sm:col-span-6 lg:col-span-3 bg-white rounded-lg p-5 flex flex-col justify-between'>
                    <h3 className='font-medium text-left mb-4'>MY BALANCE</h3>
                    <div>
                        <p className='text-sm'>Balance</p>
                        <p className='text-2xl'>$20,508</p>
                    </div>
                    <ResponsiveContainer width="100%" height={100}>
                        <AreaChart
                            data={data}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                            <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div className="my-5">
                        <div>
                            <Progress
                                progress={90}
                                label="Bank of America"
                                labelPosition="outside"
                                labelProgress={true}
                            />
                        </div>
                        <div className="mt-3">
                            <Progress
                                progress={60}
                                label="RBC Bank"
                                labelPosition="outside"
                                labelProgress={true}
                                color="red"
                            />
                        </div>
                        <div className="mt-3">
                            <Progress
                                progress={45}
                                label="Frost Bank"
                                labelPosition="outside"
                                labelProgress={true}
                            />
                        </div>
                    </div>
                    <Btn color="red">View More</Btn>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 mt-8 gap-8'>
                <div className='lg:col-span-4 bg-white rounded-lg p-5'>
                    <h3 className='font-medium text-left mb-5'>EMPLOYEE STRUCTURE</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <ComposedChart
                            layout="vertical"
                            height={400}
                            data={data}
                            margin={{
                                right: 20,
                                left: 10,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" scale="band" />
                            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
                <div className='lg:col-span-4 bg-white rounded-lg p-5 text-center'>
                    <h3 className='font-medium text-left mb-10'>EMPLOYEE SATISFACTION</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <RadarChart outerRadius="80%" data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="name" />
                            <PolarRadiusAxis />
                            <Radar name="Mike" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        </RadarChart>
                    </ResponsiveContainer>
                    <h2 className='text-3xl mt-3'>124,301 <span className='text-sm'>+3.7%</span></h2>
                    <p className='text-xs'>Lorem Ipsum is simply dummy text</p>
                    <p className='text-xs mt-2 text-red-400'>Read more</p>
                </div>
                <div className='lg:col-span-4 bg-white rounded-lg p-5'>
                    <h3 className='font-medium text-left mb-4'>PERFORMANCE</h3>
                    <p className='text-sm my-4'>
                        Measure How Fast You’re Growing Monthly Recurring Revenue. Learn More
                    </p>
                    <div className="my-5 py-5 border rounded-lg text-xs">
                        <div className='px-5'>
                            <Progress
                                progress={33}
                                label="Bank of America"
                                labelPosition="outside"
                                labelProgress={true}
                            />
                        </div>
                        <div className="mt-3 border-t px-5 pt-2">
                            <Progress
                                progress={60}
                                label="RBC Bank"
                                labelPosition="outside"
                                labelProgress={true}
                                color="red"
                            />
                        </div>
                        <div className="mt-3 border-t px-5 pt-2">
                            <Progress
                                progress={45}
                                label="Frost Bank"
                                labelPosition="outside"
                                labelProgress={true}
                            />
                        </div>
                        <div className="mt-3 border-t px-5 pt-2">
                            <Progress
                                progress={10}
                                label="Frost Bank"
                                labelPosition="outside"
                                labelProgress={true}
                                color="red"
                            />
                        </div>
                        <div className="mt-3 border-t px-5 pt-2">
                            <Progress
                                progress={75}
                                label="Frost Bank"
                                labelPosition="outside"
                                labelProgress={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* table */}

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-8">
                <div class="p-5 bg-white dark:bg-gray-900">
                    <h3 className='font-normal text-left'>EMPLOYEES</h3>
                </div>
                <table class="w-full text-xs text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="py-3 px-6 font-normal">
                                Name
                            </th>
                            <th scope="col" class="py-3 px-6 font-normal">
                                Position
                            </th>
                            <th scope="col" class="py-3 px-6 font-normal">
                                Status
                            </th>
                            <th scope="col" class="py-3 px-6 font-normal">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...Array(3).keys()].map(i => <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="p-4 w-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-10 h-10 rounded-full" src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt="" />
                                    <div class="pl-3">
                                        <div class="text-sm font-thin">Neil Sims</div>
                                        <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                    </div>
                                </th>
                                <td class="py-4 px-6">
                                    React Developer
                                </td>
                                <td class="py-4 px-6">
                                    <div class="flex items-center">
                                        <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                                    </div>
                                </td>
                                <td class="py-4 px-6">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;