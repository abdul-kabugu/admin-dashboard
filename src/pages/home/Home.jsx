import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import "./home.css"
import FeaturedInfo from '../../Componenents/featuredinfo/FeaturedInfo';
import Chart from '../../Componenents/charts/Chart';
import { userData } from '../../DommyData';
import WidgetSl from '../../Componenents/widgetSmall/WidgetSl';
import WidgetLg from '../../Componenents/widgetLg/WdgetLg';
const Home = () => {
    return <div className='home'>
   <FeaturedInfo />
   <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
   <div className='home-widget'>
       <WidgetSl />
       <WidgetLg />
   </div>
    </div>;
}



export default Home;