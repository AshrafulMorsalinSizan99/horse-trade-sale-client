// import React from 'react';
// import toast from 'react-hot-toast';

// const AllReports = ({ product1, setProduct1 }) => {
//     const { name } = product1;
//     const handleBooking = e => {
//         e.preventDefault();

//         const reported = {

//             name,

//         }
//         fetch('https://horse-trade-sale-server.vercel.app/reportedItems', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(reported)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.acknowledged) {
//                     setProduct1(null);
//                     toast.success('Report confirmed');
//                 }
//             })

//         // console.log(booking);

//         // console.log(name, resalePrice, user?.displayName, user?.email, phone, location)
//     }
//     return (
//         <div>
//             <div className="overflow-x-auto">
//                 <table className="table w-full">

//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Name</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>

//                         {

//                         }

//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };
import React from 'react';

const AllReports = () => {
    return (
        <div>

        </div>
    );
};

export default AllReports;

// export default AllReports;