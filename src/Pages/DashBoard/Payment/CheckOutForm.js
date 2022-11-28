// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';

// const CheckOutForm = ({ booking }) => {
//     const [cardError, setCardError] = useState('');
//     const stripe = useStripe();
//     const elements = useElements();
//     const [clientSecret, setClientSecret] = useState("");
//     const { resalePrice } = booking;

//     useEffect(() => {
//         // Create PaymentIntent as soon as the page loads
//         fetch("https://horse-trade-sale-server.vercel.app//create-payment-intent", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",

//             },
//             body: JSON.stringify({ resalePrice }),
//         })
//             .then((res) => res.json())
//             .then((data) => setClientSecret(data.clientSecret));
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!stripe || !elements) {
//             return
//         }
//         const card = elements.getElement(CardElement);
//         if (card === null) {
//             return;
//         }
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         });
//         if (error) {
//             console.log(error);
//             setCardError(error.message);
//         }
//         else {
//             setCardError('');
//         }
//     }
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />
//                 <button className='btn mt-4 btn-primary' type="submit" disabled={!stripe || !clientSecret}>
//                     Pay
//                 </button>
//             </form>
//             <p className='text-red-500'>{cardError}</p>
//         </>

//     );
// };

// export default CheckOutForm;