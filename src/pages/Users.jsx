
import { useState } from 'react'
import { useLoaderData } from 'react-router'

function Users() {

    const initalUsers = useLoaderData()
    const [users, setUsers] = useState(initalUsers)

    const handleDeleteUser = id => {
        fetch(`http://localhost:4000/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remmingUsers = users.filter(user => user._id !== id)
                    setUsers(remmingUsers)
                }
                console.log("data from database :", data)
            })
    }

    return (

        <div className="overflow-x-auto my-8">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>
                                <p>{index + 1}</p>
                            </th>

                            {/* image */}
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>

                            {/* name */}
                            <td>
                                <p>{user.name}</p>
                            </td>

                            {/* email */}
                            <td>{user.email}</td>

                            {/*address */}
                            <td>
                                {user.address}
                            </td>

                            {/* delete btn */}
                            <td>
                                <button onClick={() => handleDeleteUser(user._id)} className='btn btn-sm'>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users