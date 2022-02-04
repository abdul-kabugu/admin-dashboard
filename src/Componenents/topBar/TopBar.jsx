import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './TopBarStyle.css'
import {Language, Mail, NoteAddOutlined, NotificationsNone, Settings} from '@material-ui/icons';
import { Avatar, Badge } from '@material-ui/core';
const TopBar = () => {
    return <div className="topbar">
         <div className="topWrapper">
    <div className='topLeft'>
        <span className='logo'>abdul admin</span>
    </div>
    <div className='topRight'>
      <div className='iconcontainer'>
      <Badge badgeContent={4} color="secondary">
  <NotificationsNone color="action" />
</Badge></div>  
    <div className="iconcontainer">  <Badge badgeContent={2} color="secondary">
  <Language /> </Badge></div>
  <div className="iconcontainer"><Settings /></div>
  <Avatar alt="profile" src="img/profile.jpg"></Avatar>

     
      
    </div>
  </div>
    </div>;
}



export default TopBar;