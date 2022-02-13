import React from 'react'
import Navbar from "./Navbar"

// type Props = {}

const Layout: React.FC = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-5 md:p-10">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout