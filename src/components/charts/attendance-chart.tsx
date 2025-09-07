'use client'
import Image from 'next/image';
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const data = [
    {
        name: 'Mon',
        present: 4000,
        absent: 2400,
    },
    {
        name: 'Tue',
        present: 3000,
        absent: 1398,
    },
    {
        name: 'Wed',
        present: 2000,
        absent: 9800,
    },
    {
        name: 'Thur',
        present: 2780,
        absent: 3908,
    },
    {
        name: 'Fri',
        present: 1890,
        absent: 4800,
    }
];
function AttendanceChart() {
    return (
        <div className='bg-white rounded-lg w-full h-full p-4'>
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src='/moreDark.png' alt="" height={20} width={20} />
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}}/>
                    <YAxis axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}}/>
                    <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{
                        paddingTop: "20px", paddingBottom: "40px"
                    }} />
                    <Bar dataKey="present" fill="#fae27c" activeBar={<Rectangle fill="pink" stroke="blue" />}
                        legendType='circle'
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar dataKey="absent" fill="#c3ebfa" activeBar={<Rectangle fill="gold" stroke="purple" />} legendType='circle'
                        radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart