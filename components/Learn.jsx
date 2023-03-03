import React from 'react'
import { GrResources } from 'react-icons/gr'
import Link from 'next/link'
import { SiCodio, SiCplusplus, SiJava, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'
const Learn = () => {
    return (

        <div className="">

            <div className="flex justify-center items-center gap-5 border border-gray-200 p-2 my-6 text-xl text-cyan-900 font-semibold text-center">
                <GrResources /><h2>Resource to learn</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
            {
                [
                    {
                        "title": "C",
                        "icon": SiCodio,
                        "color": "#0aabc7",
                        "link":"https://www.w3schools.com/c/"
                    },
                    {
                        "title": "C++",
                        "icon": SiCplusplus,
                        "color": "#0aabc7",
                        "link":"https://www.w3schools.com/cpp/default.asp"
                    },
                    {
                        "title": "java",
                        "icon": SiJava,
                        "color": "#8a3b3b",
                        "link":"https://www.w3schools.com/java/default.asp"
                    },
                    {
                        "title": "Html",
                        "icon": SiHtml5,
                        "color": "#f54040",
                        "link":"https://www.w3schools.com/html/default.asp"
                    },
                    {
                        "title": "Css",
                        "icon": SiCss3,
                        "color": "#0aabc7",
                        "link":"https://www.w3schools.com/css/default.asp"
                    },
                    {
                        "title": "Javascript",
                        "icon": SiJavascript,
                        "color": "#c7980a",
                        "link":"https://www.w3schools.com/js/default.asp"
                    },
                ].map((arr) => {
                    return (
                        <Link key={arr.title} href={arr.link} target="_blank" >
                        <div  className='flex flex-wrap justify-center items-center py-4 px-2 w-fit hover:cursor-pointer'>

                            <div className={`relative bg-gray-200  border rounded-full text-2xl md:text-5xl p-2 md:p-4 w-fit`}
                            style={{color:arr.color}}
                            > {<arr.icon />} </div>
                            <div className={`text-center py-4  w-[130px] md:w-[200px] h-[60px] rounded-lg -ml-5 hover:bg-cyan-500 hover:font-bold hover:cursor-pointer`}>{arr.title}</div>
                        </div>
                        </Link>
                    )
                })
            }
            </div>

        </div>
    )
}

export default Learn