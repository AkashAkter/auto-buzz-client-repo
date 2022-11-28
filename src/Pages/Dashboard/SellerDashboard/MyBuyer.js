import React from 'react';
import useTitle from '../../../hooks/useTitle';
import SellerLink from '../../Shared/SellerLink/SellerLink';

const MyBuyer = () => {
    useTitle('Dashboard - My Buyers');
    return (
        <div>
            <SellerLink></SellerLink>
            <div className='mt-10 mb-[400px]'>
                <div className='bg-slate-400 p-4 uppercase text-center text-5xl'>
                    My buyer
                </div>
            </div>
        </div>
    );
};

export default MyBuyer;