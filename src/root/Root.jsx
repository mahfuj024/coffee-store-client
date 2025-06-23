import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function Root() {
    return (
        <div>
            <Navbar></Navbar>
            <section className='max-w-10/12 mx-auto'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Root