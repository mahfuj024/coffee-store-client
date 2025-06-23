import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'

function ProductDetails() {

    const product = useLoaderData()
    const navigate = useNavigate()

    return (
        <div key={product.id} className="card bg-base-100 w-2xl mx-auto my-16 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
            <figure>
                <img className='h-72 transform transition-transform duration-300 hover:scale-110'
                    src={product.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">{product.title}</h2>
                <p className='text-base'>Price : {product.price}</p>
                <p className='text-base'>category : {product.category}</p>
                <p className='text-base'>category : {product.description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(-1)} className='btn'>Go back</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails