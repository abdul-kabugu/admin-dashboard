import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './featuredinfo.css'
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons';

const FeaturedInfo = () => {
    return <div className='featured-container'>
        <div className='featureditem'>
            <span className='title'>revenue</span>
            <div className='revenue-container'>
                <span className='featured-money'>$2,600</span>
                <span className='featured-rate'>-11.2
                <ArrowDownwardOutlined className="featuredicon negative" />
                </span>
               
            </div>
            <span className='description'>compeared to last month</span>
        </div>
        <div className='featureditem'>
            <span className='title'>sales</span>
            <div className='revenue-container'>
                <span className='featured-money'>$4,600</span>
                <span className='featured-rate'>+1.2
                <ArrowUpwardOutlined className="featuredicon"/>
                </span>
               
            </div>
            <span className='description'>compeared to last month</span>
        </div>

        <div className='featureditem'>
            <span className='title'>cost</span>
            <div className='revenue-container'>
                <span className='featured-money'>$700</span>
                <span className='featured-rate'>+1.2
                <ArrowUpwardOutlined  className="featuredicon"/>
                </span>
               
            </div>
            <span className='description'>compeared to last month</span>
        </div>
    </div>;
}


export default FeaturedInfo;