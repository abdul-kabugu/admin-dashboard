import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.css'

const Chart = ({title,data,dataKey,grid}) => {
    
    return <div className="chart">
      <h3 className='title'> {title}</h3>
      <ResponsiveContainer width='100%' aspect={4 /1}>
       <LineChart data={data}>
           <XAxis dataKey="name" stroke='#5550bd'/>
           <Line type='monoton' dataKey={dataKey} stroke='#5550bd'/>
           <Tooltip />
           {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray=" 5 6"/>}
       </LineChart>
      </ResponsiveContainer>
    </div>;
}



export default Chart;