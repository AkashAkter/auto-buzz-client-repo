import React from 'react';
import AllBuyers from './AllBuyers';
import AllSellers from './AllSellers';

const AllUsers = () => {
    return (
        <div>
            <div className='border my-10 p-12'>
                <h1 className='text-5xl font-bold'>Buyers</h1>
                <AllBuyers></AllBuyers>
            </div>

            <div className='border my-10 p-12'>
                <h1 className='text-5xl font-bold'>Sellers</h1>
                <AllSellers></AllSellers>

            </div>
        </div>
    );
};

export default AllUsers;