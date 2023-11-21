import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="my-5">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}