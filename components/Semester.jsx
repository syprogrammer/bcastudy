import React from 'react'
import Link from 'next/link'
import { SlCalender } from 'react-icons/sl';
const Semester = ({ type }) => {

    return (
        <>
            <div className='py-8'>
                <div className='text-xl font-semibold flex justify-center items-center gap-2 p-5'>
                    <SlCalender />
                    <h2 className=''>Select Your Semester</h2>

                </div>

                <div className='text-2xl flex flex-wrap gap-10 p-5 justify-center'>

                    {['1', '2', '3', '4', '5', '6'].map((item) => (

                        <Link
                            key={item}
                            href={`/${type}/semester/${item}`}
                            className=' p-5 w-[100px]  md:w-[250px] text-center border  hover:cursor-pointer hover:bg-cyan-500 shadow-md rounded-lg'
                        >
                            <div className="border p-1 py-2 rounded-full bg-cyan-200 -mt-10 w-[50px] mx-auto"> {item}</div>
                            <span className='text-sm'>Semester</span>
                        </Link>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Semester

