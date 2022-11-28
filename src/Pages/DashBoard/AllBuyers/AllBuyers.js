import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {
    const [deleteBuyer, setDeletingBuyer] = useState(null);
    const closeModal = () => {
        setDeletingBuyer(null);
    }

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;
        }
    })

    // axios.get('http://localhost:5000/buyers')
    //     .then(data => {
    //         console.log(data);
    //         const buyers = data.data;
    //     })

    // const handleDeleteBuyer = buyer => {
    //     fetch(`http://localhost:5000/buyers/${buyer._id}`, {
    //         method: 'DELETE',

    //     })

    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             refetch();
    //         })
    // }

    return (
        <div>
            <h2 className='text-3xl'>All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>

                            <th>Email</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>

                                <td>{buyer.email}</td>

                                <td>
                                    <label onClick={() => setDeletingBuyer(buyer)} htmlFor="confirmation-modal" className="btn btn-xs">Delete</label>



                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {/* {
                deleteBuyer && <ConfirmationModal
                    title={`Are You sure you want to delete?`}
                    successAction={handleDeleteBuyer}
                    modalData={deleteBuyer}
                    closeModal={closeModal}
                ></ConfirmationModal>
            } */}
        </div>
    );
};

export default AllBuyers;