import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import SellerLink from '../../Shared/SellerLink/SellerLink';

const MyProduct = () => {
    const { user } = useContext(AuthContext);

    useTitle('Dashboard - My Products');

    const { data: myCars1 = [] } = useQuery({
        queryKey: ['myCars1'],
        queryFn: () => fetch(`http://localhost:5000/myMercedess?sellerName=${user.displayName}`)
            .then(res => res.json())
    });

    const { data: myCars2 = [] } = useQuery({
        queryKey: ['myCars2'],
        queryFn: () => fetch(`http://localhost:5000/myAudi?sellerName=${user.displayName}`)
            .then(res => res.json())
    });

    const { data: myCars3 = [] } = useQuery({
        queryKey: ['myCars3'],
        queryFn: () => fetch(`http://localhost:5000/myHonda?sellerName=${user.displayName}`)
            .then(res => res.json())
    });

    const merged = [...myCars1, ...myCars2, ...myCars3];


    return (
        <div>
            <SellerLink></SellerLink>
            <div className='mb-[500px]'>
                <h3 className="text-3xl text-center">My Orders</h3>

                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                merged?.map((book, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td><img className='w-20' src={book.img} alt="" /></td>
                                    <td>{book.carName}</td>
                                    <td>${book.currentPrice}</td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;