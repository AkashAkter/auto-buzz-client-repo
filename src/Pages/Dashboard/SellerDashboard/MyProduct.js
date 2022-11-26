import React from 'react';
import useTitle from '../../../hooks/useTitle';
import SellerLink from '../../Shared/SellerLink/SellerLink';

const MyProduct = () => {
    useTitle('Dashboard - My Products');
    return (
        <div>
            <SellerLink></SellerLink>
            My Product
        </div>
    );
};

export default MyProduct;