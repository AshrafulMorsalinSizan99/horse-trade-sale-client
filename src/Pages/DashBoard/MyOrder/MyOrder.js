import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-3xl'>My Orders</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Email</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">

                                        <div>
                                            <div className="font-bold">{user?.email}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking.name}


                                </td>
                                <td>{booking.resalePrice}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Pay</button>
                                </th>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyOrder;