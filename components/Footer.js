import React from 'react'

const Footer = () => {
  return (
    <footer className="p-4 mt-5 bg-white rounded-lg border md:px-6 md:py-8 shadow-sm w-full">
    <div className="sm:flex sm:items-center sm:justify-between">
    <div><a href='/'> <div className='text-2xl'>Bca<span className='text-cyan-500 font-semibold'>Study</span></div></a>
                   
                   </div>
      <ul className="flex justify-center gap-2 flex-wrap items-center mb-6 py-5 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <li className='list-none w-[80px] md:w-[120px]'>
          <a href="#" className="mr-4 hover:underline md:mr-6  ">About</a>
        </li>
        <li className='list-none w-[80px] md:w-[120px]'>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">Privacy Policy</a>
        </li>
        <li className='list-none  w-[80px] md:w-[120px]'>
          <a href="#" className="mr-4 hover:underline md:mr-6  ">Licensing</a>
        </li>
        <li className='list-none w-[80px] md:w-[120px]'>
          <a href="#" className="hover:underline ">Contact</a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
   <div className="w-fit mx-auto">
   <span className=" w-fit text-sm text-gray-500 sm:text-center dark:text-gray-400">
    ©2023 BCASTUDY™  All Rights Reserved.
    </span>
   </div>
  </footer>
  )
}

export default Footer