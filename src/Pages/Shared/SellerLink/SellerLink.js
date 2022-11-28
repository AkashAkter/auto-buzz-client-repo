import React from 'react';
import { Link } from 'react-router-dom';

const SellerLink = () => {
    return (
        <div className='text-center flex justify-between mt-10 lg:px-20 bg-slate-400 border'>
            <Link to='/dashboard/addProduct'><button className='btn btn-outline btn-sm font-bold'>Add Product</button></Link>
            <Link to='/dashboard/myProduct'><button className='btn btn-outline btn-sm font-bold mx-20'>My Product</button></Link>
            <Link to='/dashboard/mybuyer'><button className='btn btn-outline btn-sm font-bold'>My Buyers</button></Link>
        </div>
    );
};

export default SellerLink;