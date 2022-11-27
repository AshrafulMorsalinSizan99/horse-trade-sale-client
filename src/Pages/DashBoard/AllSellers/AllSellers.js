import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {
    const [deleteBuyer, setDeletingBuyer] = useState(null);
    const closeModal = () => {
        setDeletingBuyer(null);
    }

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    })
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
            <h2 className='text-3xl'>All Sellers</h2>
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
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>

                                <td>{seller.email}</td>

                                <td>
                                    <label onClick={() => setDeletingBuyer(seller)} htmlFor="confirmation-modal" className="btn btn-xs">Delete</label>



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

export default AllSellers;