import React from 'react'
import { IoIosPaper } from 'react-icons/io';
import { AiOutlineForm } from 'react-icons/ai';
import { CgList } from 'react-icons/cg';
import Link from 'next/link'

import { GrNotes, GrCertificate } from 'react-icons/gr'
const Hero = () => {
    return (
        <div className='my-5 py-8 px-4 flex flex-wrap justify-center gap-8 '>
            {
                [
                    {
                        "title": "Question Paper",
                        "icon": IoIosPaper,
                        "link":"/questionpaper",
                        "target":""
                    },
                    {
                        "title": "Notes",
                        "icon": GrNotes,
                        "link":"/notes",
                        "target":""
                    },
                    {
                        "title": "syllabus",
                        "icon": CgList,
                        "link":"/syllabus",
                        "target":""
                    },
                    {
                        "title": "CCSU Result",
                        "icon": GrCertificate,
                        "link":"https://ccsuresults.com/",
                        "target":"_blank"
                    },
                    {
                        "title": "CCSU Exam Form",
                        "icon": AiOutlineForm,
                        "link":"https://exam.ccsuweb.in/ExamForms/Exam_Form_Students_Search_ID.aspx#",
                        "target":"_blank"
                    },
                ].map((arr) => {
                    return (
                        <Link href={arr.link} target={arr.target} key={arr.title}>
                        <div  className='flex flex-col justify-center items-center border border-gray-200 w-[150px] md:w-[260px] py-8 p-2 shadow-lg rounded-lg hover:bg-cyan-200  hover:shadow-2xl hover:font-bold hover:cursor-pointer'>
                            <div className='img  bg-cyan-200 p-4 text-2xl rounded-full -mt-12 '>
                                {<arr.icon />}
                            </div>
                            <div className='text-center py-2'>{arr.title}</div>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Hero