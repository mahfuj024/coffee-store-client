import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'

function CoffeeDetails() {

    const coffee = useLoaderData()
    const navigate = useNavigate()

    return (
        <div className="card bg-base-100 w-96 shadow-sm mx-auto my-12">
            <figure>
                <img
                    src={coffee.photo}
                    alt="coffee" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{coffee.name}</h2>
                <p>Supplier : {coffee.supplier}</p>
                <p>Taste : {coffee.taste}</p>
                <p>category : {coffee.category}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(-1)} className="btn btn-primary">Go back</button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeDetails