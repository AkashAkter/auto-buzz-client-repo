import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import AllUsers from '../AllUsers/AllUsers';
import MyOrders from '../MyOrders/MyOrders';
import SellerDashboard from '../SellerDashboard/SellerDashboard';

const Dashboard = () => {
    useTitle('Dashboard');

    const { user } = useContext(AuthContext);

    const { data: users = {} } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://auto-buzz-server-site.vercel.app/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    if (users[0]?.role === 'admin') {
        return <AllUsers></AllUsers>

    }
    else {
        if (users[0]?.role === 'Seller') {
            return <SellerDashboard></SellerDashboard>

        }
        else {
            return <MyOrders></MyOrders>
        }
    }
};

export default Dashboard;