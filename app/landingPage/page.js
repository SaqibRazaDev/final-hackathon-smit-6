"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '../(components)/Navbar/navbar';



const LandingPage = () => {
  return (
    <>
      <div className="section m-0 p-0 h-full overflow-y-hidden">

        <Navbar />
        <div className="content m-0 py-44 flex flex-col items-center text-center">

          <h1 className="text-white font-bold text-4xl ">
            Avoid Hassels and Delays.
          </h1>
          <p className='mx-auto py-5 text-white'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda <br /> laudantium itaque minus consequuntur, fuga placeat labore et, <br /> suscipit voluptatum cupiditate amet dolorum aut nulla dignissimos! <br /> Dolorem qui odit cumque! Nam!
          </p>
          <Link href="">
            <p className='bg-blue-500 hover:bg-blue-700 text-white font-semibold  py-2 px-4 rounded max-w-sm'> Make an appoinment.</p>
          </Link>
          <Link href="/dashboardPage">
            <p className='text-white my-3 text-sm py-2 px-4 max-w-sm hover:underline'> LOGIN as Admin.</p>
          </Link>
        </div>
      </div>


    </>
  )
}

export default LandingPage
