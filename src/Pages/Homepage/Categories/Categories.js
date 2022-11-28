import React, { useEffect, useState } from 'react';
import Products from '../../Products/Products';
import CategoryCard from './CategoryCard';
import axios from 'axios';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // useEffect(() => {
    //     axios.get('http://localhost:5000/categories')
    //         .then(data => setCategories(data))
    // }, [])
    return (
        <div>
            <div className='mb-4 my-4'>
                <h2 className='text-5xl font-semibold text-center text-yellow-600'>Our Categories</h2>
                <p className='text-center font-bold'>These are the categories we sell products. More categories will be added in recent future.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;