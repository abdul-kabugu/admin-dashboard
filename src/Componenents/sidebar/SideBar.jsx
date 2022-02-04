import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BarChartOutlined, ChatBubble, ChatOutlined, EmailOutlined, Inbox, LineStyle, MonetizationOnOutlined, NewReleases, PersonOutline, StorefrontOutlined, Timeline, TrendingUp } from '@material-ui/icons';
import "./sideBar.css"


const SideBar = () => {
    return <div className='sidebar'>
        <div className="wrapper">
            <div className='sidemenu'>
                <h3 className='sidetitle'>dashboard</h3>
                <ul className='sidelist'>
                    <li className='listitem active'>
                        <LineStyle className='icon-s'/> home
                    </li>
                    <li className='listitem'>
                        <Timeline  className='icon-s'/> analytic
                    </li>
                    <li className='listitem'>
                        <TrendingUp  className='icon-s'/> sales
                    </li>
                </ul>
            </div>
            <div className='sidemenu'>
                <h3 className='sidetitle'>quick menu</h3>
                <ul className='sidelist'>
                    <li className='listitem'>
                        <PersonOutline  className='icon-s'/> users
                    </li>
                    <li className='listitem'>
                        <StorefrontOutlined  className='icon-s'/> products
                    </li>
                    <li className='listitem'>
                        <MonetizationOnOutlined  className='icon-s'/> transactions
                    </li>
                    <li className='listitem'>
                        <BarChartOutlined  className='icon-s'/> reports
                    </li>
                </ul>
            </div>
            <div className='sidemenu'>
                <h3 className='sidetitle'>notifications</h3>
                <ul className='sidelist'>
                    <li className='listitem active'>
                        <EmailOutlined className='icon-s'/> mails
                    </li>
                    <li className='listitem'>
                        <ChatOutlined  className='icon-s'/> feedback
                    </li>
                    <li className='listitem'>
                        <ChatBubble  className='icon-s'/> messages
                    </li>
                    <li className='listitem'>
                        <Inbox  className='icon-s'/> manage
                    </li>
                </ul>
            </div>
            <div className='sidemenu'>
                <h3 className='sidetitle'>staff</h3>
                <ul className='sidelist'>
                    <li className='listitem active'>
                        <Inbox className='icon-s'/> manage
                    </li>
                    <li className='listitem'>
                        <Timeline  className='icon-s'/> analytic
                    </li>
                    <li className='listitem'>
                        <NewReleases  className='icon-s'/> reports
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>;
}



export default SideBar;