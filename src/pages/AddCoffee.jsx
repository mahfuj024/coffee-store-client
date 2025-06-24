import React from 'react'
import { Link } from 'react-router'
import Swal from 'sweetalert2';

function AddCoffee() {

    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const coffee = { name, chef, supplier, taste, category, details, photo }
        console.log(coffee)

        fetch("http://localhost:4000/coffees", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee add successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    console.log("data from database :", data)
                    form.reset()
                }
            })
    }

    return (
        <div className='mt-10'>
            <Link to="/" className='font-semibold text-lg'>-- Back to home</Link>

            <div className='p-20 mt-10 bg-[#F4F3F0] rounded-2xl'>
                <div className='space-y-3'>
                    <h1 className='text-center font-semibold text-3xl'>Add New Coffee</h1>
                    <p className='text-center font-light opacity-75'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <form onSubmit={handleAddCoffee}>
                        <div className='mt-12 space-y-5'>
                            <div className='grid grid-cols-2 gap-16'>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-base font-semibold">Name</label>
                                    <input type="text" name="namel" id="name" placeholder="Enter coffee name" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100  dark:text-gray-800" />
                                </div><div>
                                    <label htmlFor="chef" className="block mb-2 text-base font-semibold">Chef</label>
                                    <input type="text" name="chef" id="chef" placeholder="Enter coffee chef" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100 dark:text-gray-800" />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-16'>
                                <div>
                                    <label htmlFor="supplier" className="block mb-2 text-base font-semibold">Supplier</label>
                                    <input type="text" name="supplier" id="supplier" placeholder="Enter coffee supplier" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100  dark:text-gray-800" />
                                </div><div>
                                    <label htmlFor="taste" className="block mb-2 text-base font-semibold">Taste</label>
                                    <input type="text" name="taste" id="taste" placeholder="Enter coffee taste" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100 dark:text-gray-800" />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-16'>
                                <div>
                                    <label htmlFor="category" className="block mb-2 text-base font-semibold">Category</label>
                                    <input type="text" name="category" id="category" placeholder="Enter coffee category" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100  dark:text-gray-800" />
                                </div>
                                <div>
                                    <label htmlFor="details" className="block mb-2 text-base font-semibold">Details</label>
                                    <input type="text" name="details" id="details" placeholder="Enter coffee details" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100  dark:text-gray-800" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="photo" className="block mb-2 text-base font-semibold">Photo</label>
                                <input type="text" name="photo" id="photo" placeholder="Enter photo URL" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100 dark:text-gray-800" />
                            </div>
                            <div className='pt-2'>
                                <button type="submit" className="w-full px-8 py-3 font-semibold hover:font-bold rounded-md bg-[#D2B48C] ">Add Coffee</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCoffee