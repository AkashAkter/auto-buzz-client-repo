import React from 'react';
import useTitle from '../../../hooks/useTitle';
import SellerLink from '../../Shared/SellerLink/SellerLink';

const MyBuyer = () => {
    useTitle('Dashboard - My Buyers');
    return (
        <div>
            <SellerLink></SellerLink>
            <div>
                My buyer
            </div>
        </div>
    );
};

export default MyBuyer;