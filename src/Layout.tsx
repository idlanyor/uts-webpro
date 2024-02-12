import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="mt-24 flex">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}