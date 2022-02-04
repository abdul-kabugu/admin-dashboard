import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './widgetLg.css'
import { Avatar, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const WidgetLg = () => {
    return <div className='big-widg'>
    <p className='title'>latest transaction</p>
        <Table />
        <TableHead>
            <TableRow>
            <TableCell>Customer</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow className='avo'>
            <div className='ava'>
                <TableCell> <img src='img/profile-2.jpg' className='profile' >
    
                </img><span className='u-name'>Susan Caroel</span> </TableCell></div>
                <TableCell>Jun 2021</TableCell>
                <TableCell>$122.00</TableCell>
                <TableCell><button>Approved</button></TableCell>
                </TableRow>
                <TableRow>
            <div className='ava'>
                <TableCell> <img src='img/profile-2.jpg' className='profile' ></img><span className='u-name'>Susan Caroel</span> </TableCell></div>
                <TableCell>Jun 2021</TableCell>
                <TableCell>$122.00</TableCell>
                <TableCell><button>Decilined</button></TableCell>
                </TableRow>
                <TableRow>
            <div className='ava'>
                <TableCell> <img src='img/profile-2.jpg' className='profile' ></img><span className='u-name'>Susan Caroel</span> </TableCell></div>
                <TableCell>Jun 2021</TableCell>
                <TableCell>$122.00</TableCell>
                <TableCell><button>Pending</button></TableCell>
                </TableRow>
                
            
               
        </TableBody>
    </div>;
}



export default WidgetLg;