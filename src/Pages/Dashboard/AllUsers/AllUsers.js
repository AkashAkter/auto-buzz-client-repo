import React from 'react';
import AllBuyers from './AllBuyers';
import AllSellers from './AllSellers';

const AllUsers = () => {
    return (
        <div>
            <h1 className='text-5xl text-center'>Buyers</h1>
            <AllBuyers></AllBuyers>

            <h1 className='text-5xl text-center'>Sellers</h1>
            <AllSellers></AllSellers>
            {/* <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div> */}
        </div>
    );
};

export default AllUsers;