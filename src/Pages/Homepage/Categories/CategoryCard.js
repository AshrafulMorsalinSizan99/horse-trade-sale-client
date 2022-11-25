import React from 'react';

const CategoryCard = ({ category }) => {
    const { title, img } = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See All Products</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;