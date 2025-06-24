import React, { useEffect, useState } from 'react'
import backgroundImg from "../assets/product-bg.png"
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';
import Swal from "sweetalert2";

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

    const handleDeleteCoffe = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sure',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/coffees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remmingCoffees = coffees.filter(coffee => coffee._id !== id)
                            setCoffees(remmingCoffees)
                        }
                        console.log("data from database :", data)
                    })
                Swal.fire('Deleted!', 'coffee has been deleted.', 'success');
            }
        });
    }

    return (
        <div className="relative bg-cover bg-center mt-32" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <h1 className='text-center font-semibold text-3xl'>Our Popular Products</h1>
            <div className='text-center mt-6'>
                <button className='btn bg-[#E3B577] text-white'>Add Coffee</button>
            </div>

            {/* display coffe section */}
            <div className='grid grid-cols-2 gap-12 mt-12'>
                {
                    coffees.map(coffee => <div key={coffee._id} className="card card-side bg-[#F5F4F1] justify-evenly items-center">
                        <figure>
                            <img
                                src={coffee.photo}
                                alt="Movie" />
                        </figure>
                        <div className='space-y-4 font-semibold'>
                            <h2>Name : {coffee.name}</h2>
                            <p>Chef: {coffee.chef}</p>
                            <p>Category : {coffee.category}</p>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <button className="btn bg-[#D2B48C]"><FaEye className='text-white' size={17} /></button>
                            <button className="btn bg-[#3C393B]"><FaPen className='text-white' size={17} /></button>
                            <button onClick={() => handleDeleteCoffe(coffee._id)} className="btn bg-[#EA4744]"><MdDelete className='text-white' size={17} /></button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default DisplayCoffee