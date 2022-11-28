import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import AllReports from '../DashBoard/AllReports/AllReports';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();
    // const { _id } = category;
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch(`https://horse-trade-sale-server.vercel.app/categories/${}`)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    const [product1, setProduct1] = useState(null);
    return (
        <div>
            <div>
                <h2 className='text-5xl font-semibold text-center text-yellow-600'>All Products</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                        setProduct1={setProduct1}
                    >

                    </ProductCard>)
                }
            </div>
            {
                product1 &&
                <BookingModal
                    product1={product1}
                    setProduct1={setProduct1}
                ></BookingModal>
            }
            {/* {
                product1 &&
                <AllReports
                    product1={product1}
                    setProduct1={setProduct1}
                >
                </AllReports>
            } */}
        </div>
    );
};

export default Products;