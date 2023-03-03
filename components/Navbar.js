import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {


    return (
        <>
            <div className='p-3 text-center bg-white border-b-4 shadow-sm w-full'>
                <div><Link href='/'>
                    <div className=''>
                        <Image
                            src='/logo.png'
                            width='100'
                            height='100'
                            alt="BcaStudy"
                        />
                    </div>
                </Link>
                </div>
            </div>

        </>
    )
}

export default Navbar