import { FaCartPlus } from "react-icons/fa6";
import { Link, NavLink } from 'react-router'
import logo from "../assets/logo.png"
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

    const { products } = use(AuthContext)

    const handleShowCart = () => {
        document.getElementById('my_modal_1').showModal()
    }

    const handleProductDelete = id => {
        alert("proparlly not work delete button")
    }

    return (
        <div className="navbar bg-base-100 shadow-sm lg:px-40 md:px-12 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className='flex items-center gap-2 '>
                    <img className='w-9 transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.02]' src={logo} alt="brand logo" />
                    <Link to="/" className="text-2xl font-semibold transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.02]">Espresso Emporium</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base font-semibold space-x-12">
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500" : ""} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500" : ""} to="/other_products">Other_Products</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500" : ""} to="/addcoffee">Addcoffee</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500" : ""} to="/users">Users</NavLink>
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <p onClick={handleShowCart} className="flex items-center"><FaCartPlus size={18} /> <span className="text-sm ml-1 pb-4 font-light">{products.length}</span></p>
                <Link to="/login" className="btn">Log in</Link>
                <Link to="/signup" className="btn">Sign up</Link>
            </div>

            {/* show cart modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            No
                                        </th>
                                        <th>Image</th>
                                        <th>Name</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product, index) => <tr key={index}>
                                            <th>
                                                {index + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={product.image}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {product.title}
                                            </td>

                                            <th>
                                                <button onClick={() => handleProductDelete(product.id)} className="btn btn-xs">Delete</button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </dialog>

        </div>
    )
}

export default Navbar