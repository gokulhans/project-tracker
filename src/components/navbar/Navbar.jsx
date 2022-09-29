import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { logout } from "../../firebase";

function Navbar() {
    return (
        <>
            <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-3"><b>Goal Tracker</b></span>
                    </Link>

                    <Link to='/add-project' className="flex md:order-2">
                        <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><b>Add Project</b></button>
                    </Link>
                    {/* <div className="flex md:order-2">
                        <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={logout}><b>logout</b></button>
                    </div> */}
                   
                </div>
            </nav>

        </>
    )
}

export default Navbar