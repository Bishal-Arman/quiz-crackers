import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import"./Statistics.css"
const Statistics = () => {
    const questionDatas=useLoaderData()
    const info=questionDatas.data
    
    console.log(info)
    return (
   

<div className='chart'>
<ResponsiveContainer  width={500} height={400}>
      <BarChart
        data={info}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        <Bar dataKey="total" fill="#82ca9d" />
        
      </BarChart>
    </ResponsiveContainer>
</div>

    )
};

export default Statistics;