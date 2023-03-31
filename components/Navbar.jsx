import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, getSession, signIn, signOut } from 'next-auth/react'

import { BiMenuAltRight, BiCopyAlt, BiLogOut } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs'
import { HiX } from 'react-icons/hi';
import { AiFillHome, AiOutlineUnorderedList, AiFillContacts } from 'react-icons/ai'
import { GiPapers } from 'react-icons/gi'
import { motion } from 'framer-motion';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const { data: session } = useSession()
    function handleSignOut() {
        signOut()
    }

    return (
        <>
            <div className='p-3 fixed z-40  flex justify-between text-center bg-white border-b-4 shadow-sm w-full'>
                <div>
                    <Link href='/'>
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
                <div className="mobile_navbar-menu  p-2 hover:cursor-pointer  order-2 ">
                    <BiMenuAltRight onClick={() => setToggle(true)}
                        className='text-2xl'
                    />

                </div>
            </div>
            {/* mobile navigation  */}
            {toggle && (
                <motion.div
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    initial={{ width: 0 }} animate={{ width: 300 }}
                    className='transition ease-in-out delay-150 duration-300 p-5 bg-gradient-to-r from-cyan-50 to-cyan-100 fixed z-40 w-[70%] md:w-[60%] top-0 right-0 h-full'
                >
                    <HiX onClick={() => setToggle(false)} className='float-right text-3xl m-2 hover:cursor-pointer hover:text-red-500' />
                    <ul className='my-10 flex flex-col gap-2 justify-evenly'>
                        
                            
                            
                                <li className='p-2 cursor-pointer hover:text-cyan-700  font-semibold list-none'>
                                    <div onClick={() => setToggle(false)}
                                        className='flex gap-2 items-center'
                                        style={{ listStyle: 'none' }}
                                    >
                                        <BsPersonFill />
                                        {session ? session.user.name : (
                                            <Link href="/login">Login</Link>
                                        )}
                                    </div>
                                </li>
                            
                        
                        {
                            [
                                {
                                    "title": "Home",
                                    "link": "/",
                                    "icon": AiFillHome
                                }, {
                                    "title": "Notes",
                                    "link": "/notes",
                                    "icon": BiCopyAlt
                                }, {

                                    "title": "Question Papers",
                                    "link": "/questionpaper",
                                    "icon": GiPapers
                                },
                                {
                                    "title": "Syllabus",
                                    "link": "/syllabus",
                                    "icon": AiOutlineUnorderedList
                                },
                                {
                                    "title": "Contact",
                                    "link": "#contact",
                                    "icon": AiFillContacts
                                }


                            ].map((item) => (
                                <li key={item.title} className='p-2  hover:text-cyan-700  font-semibold list-none'>

                                    <Link href={`${item.link}`} onClick={() => setToggle(false)}
                                        className='flex gap-2 items-center'
                                        style={{ listStyle: 'none' }}
                                    >
                                        {<item.icon />}
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        {
                            session &&
                            (
                                <li className='p-2 cursor-pointer hover:text-cyan-700  font-semibold list-none'
                                    onClick={handleSignOut}
                                >
                                    <div onClick={() => setToggle(false)}
                                        className='flex gap-2 items-center'
                                        style={{ listStyle: 'none' }}
                                    >
                                        <BiLogOut />
                                        Logout
                                    </div>
                                </li>
                            )
                        }
                    </ul>

                </motion.div>

            )}
            <div className='h-[80px]'> </div>

        </>
    )
}

export default Navbar
