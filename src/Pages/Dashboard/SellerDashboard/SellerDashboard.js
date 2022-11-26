import React from 'react';
import useTitle from '../../../hooks/useTitle';
import MyProduct from './MyProduct';

const SellerDashboard = () => {
    useTitle('Dashboard - My Product');
    return (
        <div className='mb-[500px]'>
            <MyProduct></MyProduct>
        </div>
    );
};

export default SellerDashboard;

