"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { IoStatsChart } from "react-icons/io5";
import { BiSolidFirstAid } from "react-icons/bi";
import { AiFillSchedule } from "react-icons/ai";
import { MdAssignmentAdd } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";

export default function SideBar() {


    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };






    return (
        <>
            <div className="menu w-20 h-screen md:w-36 lg:w-44 flex flex-col items-center bg-white px-2 py-6">
                <h3 className="text-sm font-semibold md:text-lg md:font-bold my-8 text-blue-800">
                    Medilink
                </h3>
                <div className="menu-links space-y-4">
                    <Link
                        href="/dashboardPage"
                        className={`flex font-bold ${activeButton === 'dashboard' ? 'text-blue-800' : 'text-black'
                            } hover:text-blue-700`}
                        onClick={() => handleButtonClick('dashboard')}
                    >
                        <IoStatsChart size={20} />
                        <span className="hidden md:block mx-2">Dashboard</span>
                    </Link>

                    <Link
                        href="/doctorsPage"
                        className={`flex font-bold ${activeButton === 'doctors' ? 'text-blue-800' : 'text-black'
                            } hover:text-blue-700`}
                        onClick={() => handleButtonClick('doctors')}
                    >
                        <BiSolidFirstAid size={20} />
                        <span className="hidden md:block mx-2">Doctors</span>
                    </Link>

                    <Link
                        href="/schedulesPage"
                        className={`flex font-bold ${activeButton === 'schedules' ? 'text-blue-800' : 'text-black'
                            } hover:text-blue-700`}
                        onClick={() => handleButtonClick('schedules')}
                    >
                        <AiFillSchedule size={20} />
                        <span className="hidden md:block mx-2">Schedules</span>
                    </Link>
                    <Link
                        href="/appoinmentsPage"
                        className={`flex font-bold ${activeButton === 'schedules' ? 'text-blue-800' : 'text-black'
                            } hover:text-blue-700`}
                        onClick={() => handleButtonClick('schedules')}
                    >
                        <MdAssignmentAdd size={20} />
                        <span className="hidden md:block mx-2">Appoinments</span>
                    </Link>
                    <Link
                        href="/patientsPage"
                        className={`flex font-bold ${activeButton === 'schedules' ? 'text-blue-800' : 'text-black'
                            } hover:text-blue-700`}
                        onClick={() => handleButtonClick('schedules')}
                    >
                        <FaWheelchair size={20} />
                        <span className="hidden md:block mx-2">Patients</span>
                    </Link>
                </div>


            </div>
        </>
    )
}
