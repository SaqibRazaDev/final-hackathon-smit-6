import React from 'react'
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <div className="nav px-3 py-2 flex flex-row justify-between items-center">
                <div className="logo">
                    <h1 className="text-white text-xl font-bold md:text-2xl">
                        Medilink
                    </h1>
                </div>

                <div className="links">
                    <Link className='text-white hover:text-blue-200 font-semibold py-1 px-5' href="/loginPage">
                        LOGIN
                    </Link>
                    <Link className='text-white hover:text-blue-200  py-1 px-5' href="/loginPage">
                        REGISTER
                    </Link>
                </div>
            </div>


        </>
    )
}
