import React from 'react';

const ProductCard = ({ product, setProduct1 }) => {
    const { id, name, picture, location, resalePrice, originalPrice, used, time } = product;
    console.log(product)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Resale Price: {resalePrice}</p>
                <p>Original Price: {originalPrice}</p>
                <p>Used Time: {used}</p>
                <p>Published Time: {time}</p>
                <div className="card-actions justify-end">

                    <label htmlFor="booking-modal" className="btn btn-primary"
                        onClick={() => setProduct1(product)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;