import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './widgetSl.css'
import { Visibility } from '@material-ui/icons';

const WidgetSl = () => {
    return <div className='small-wedg'>
        <span className='title'>new join members</span>
        <div className='card'>
            <img src='img/profile.jpg' className='profile'></img>
            <div className='role'>
                <span className='name'>anna keller</span>
                <span className='carear'>software engenear</span>
            </div>
            <button className='v-btn'> <Visibility className='small-icon'/> display</button>
        </div>
        <div className='card'>
            <img src='img/profile.jpg' className='profile'></img>
            <div className='role'>
                <span className='name'>anna keller</span>
                <span className='carear'>software engenear</span>
            </div>
            <button className='v-btn'> <Visibility  className='small-icon'/> display</button>
        </div>
        <div className='card'>
            <img src='img/profile.jpg' className='profile'></img>
            <div className='role'>
                <span className='name'>anna keller</span>
                <span className='carear'>software engenear</span>
            </div>
            <button className='v-btn'> <Visibility  className='small-icon'/> display</button>
        </div>
        <div className='card'>
            <img src='img/profile.jpg' className='profile'></img>
            <div className='role'>
                <span className='name'>anna keller</span>
                <span className='carear'>software engenear</span>
            </div>
            <button className='v-btn'> <Visibility  className='small-icon'/> display</button>
        </div>
        <div className='card'>
            <img src='img/profile.jpg' className='profile'></img>
            <div className='role'>
                <span className='name'>anna keller</span>
                <span className='carear'>software engenear</span>
            </div>
            <button className='v-btn'> <Visibility  className='small-icon'/> display</button>
        </div>
        <div className='card'>
            <img src='img/profile.jpg' className='profile'></img>
            <div className='role'>
                <span className='name'>anna keller</span>
                <span className='carear'>software engenear</span>
            </div>
            <button className='v-btn'> <Visibility  className='small-icon'/> display</button>
        </div>
    </div>;
}



export default WidgetSl;