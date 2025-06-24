import React, { useEffect, useState } from 'react'
import backgroundImg from "../assets/product-bg.png"

function DisplayCoffee() {

    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/coffees")
            .then(res => res.json())
            .then(data => {
                setCoffees(data)
                console.log(data)
            })
    }, []) 

    return (
        <div className="relative bg-cover bg-center mt-32" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <h1 className='text-center font-semibold text-3xl'>Our Popular Products</h1>
            <div className='text-center mt-6'>
                <button className='btn bg-[#E3B577] text-white'>Add Coffee</button>
            </div>

            {/* display coffe section */}
            <div>

            </div>
        </div>
    )
}

export default DisplayCoffee