import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();
    // const { _id } = category;
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/categories/${}`)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
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
                    >

                    </ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;