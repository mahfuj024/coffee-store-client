import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import Swal from "sweetalert2";

function CoffeeUpdate() {

    const coffee = useLoaderData()
    console.log(coffee)
    const navigate = useNavigate()

    const handleUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const NewCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(NewCoffee)
        fetch(`http://localhost:4000/coffees/${coffee._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(NewCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee is updated successfully!',
                        icon: 'success',
                        // confirmButtonText: 'OK'
                    });
                    console.log("data from database :", data)
                }
            })
    }

    return (
        <div>
            <button onClick={() => navigate(-1)} className='font-semibold text-lg mt-8 cursor-pointer'>Go back</button>

            <div className='p-20 mt-10 bg-[#F4F3F0] rounded-2xl'>

                <div className='space-y-3'>
                    <h1 className='text-center font-semibold text-3xl'>Update New Coffee</h1>

                    <form onSubmit={handleUpdateCoffee}>
                        <div className='mt-12 space-y-5'>
                            <div className='grid grid-cols-2 gap-16'>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-base font-semibold">Name</label>
                                    <input type="text" defaultValue={coffee.name} name="name" id="name" placeholder="Enter coffee name" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100  dark:text-gray-800" />
                                </div><div>
                                    <label htmlFor="chef" className="block mb-2 text-base font-semibold">Chef</label>
                                    <input type="text" name="chef" defaultValue={coffee.chef} id="chef" placeholder="Enter coffee chef" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100 dark:text-gray-800" />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-16'>
                                <div>
                                    <label htmlFor="supplier" className="block mb-2 text-base font-semibold">Supplier</label>
                                    <input type="text" name="supplier" defaultValue={coffee.supplier} id="supplier" placeholder="Enter coffee supplier" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100  dark:text-gray-800" />
                                </div><div>
                                    <label htmlFor="taste" className="block mb-2 text-base font-semibold">Taste</label>
                                    <input type="text" name="taste" defaultValue={coffee.taste} id="taste" placeholder="Enter coffee taste" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100 dark:text-gray-800" />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-16'>
                                <div>
                                    <label htmlFor="category" className="block mb-2 text-base font-semibold">Category</label>
                                    <input type="text" name="category" defaultValue={coffee.category} id="category" placeholder="Enter coffee category" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100  dark:text-gray-800" />
                                </div>
                                <div>
                                    <label htmlFor="details" className="block mb-2 text-base font-semibold">Details</label>
                                    <input type="text" name="details" id="details" defaultValue={coffee.details} placeholder="Enter coffee details" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100  dark:text-gray-800" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="photo" className="block mb-2 text-base font-semibold">Photo</label>
                                <input type="text" name="photo" defaultValue={coffee.photo} id="photo" placeholder="Enter photo URL" className="w-full px-3 py-2 border rounded-md bg-white dark:border-gray-100 dark:text-gray-800" />
                            </div>
                            <div className='pt-2'>
                                <button type="submit" className="w-full px-8 py-3 font-semibold hover:font-bold rounded-md bg-[#D2B48C] ">Update Coffee</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CoffeeUpdate