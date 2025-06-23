import React, { use } from 'react'
import { Link, useLoaderData } from 'react-router'
import { AuthContext } from '../context/AuthContext'

function Products() {

  const products = useLoaderData()
  const { handleAddToCart } = use(AuthContext)


  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center lg:gap-28 my-12'>
      {
        products.map(product => <div key={product.id} className="card bg-base-100 w-96 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
          <figure>
            <img className='h-56 transform transition-transform duration-300 hover:scale-110'
              src={product.image}
              alt="Shoes" />
          </figure>
          <div className="card-body space-y-2">
            <h2 className="card-title">{product.title}</h2>
            <p className='text-base'>Price : {product.price}</p>
            <div className="card-actions justify-end">
              <Link to={`/productDetaila/${product.id}`} className="btn btn-primary text-white transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 shadow hover:shadow-lg">Details</Link>
              <button onClick={() => handleAddToCart(product)} className="btn btn-primary text-white transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 shadow hover:shadow-lg">Add to cart</button>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default Products