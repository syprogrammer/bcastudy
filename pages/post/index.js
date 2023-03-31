import React from 'react'
import Link from 'next/link'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import {BiCategoryAlt} from 'react-icons/bi'
import {client} from '../../client'
import fallback from "../../public/fallback-image.jpg";
const post = ({post}) => {
    return (
        <>

            <div className="flex flex-wrap gap-5 justify-center items-center px-2">
                {
                    post.map((item) => {
                        return (
                            <div className="flex flex-col gap-2 justify-center items-center w-[90%] md:w-[270px] p-2 mx-auto border shadow-lg rounded-lg  hover:shadow-xl">
                                <div className="img">
                                    <img src={item.imgurl} 
                                    alt=""
                                        className='w-[270px] h-[160px]'
                                       
                                        
                                    />
                                </div>
                                <div className="title text-lg">
                                    {item.title}
                                </div>
                                <div className="break-words mx-auto w-[80%] text-sm">
                                    {item.content.slice(0,50)}...
                                </div>
                                <div className="flex gap-2 items-center border py-1 px-2 text-sm text-gray-500 rounded-xl">
                                    <BiCategoryAlt/>
                                    <div className="">{item.category}</div>
                                </div>
                               <Link href={`/post/showpost/${item.title}`}>
                               <button
                                className='border rounded-lg py-1 px-4 w-[120px] mx-auto bg-white border-cyan-500 text-cyan-600 font-light  hover:text-white hover:bg-cyan-700 my-1'
                                >Read</button>
                               </Link>
                            </div>
                        )
                    })
                }
                <Link href="/post/create">
                <div className="fixed cursor-pointer z-20 text-5xl bg-cyan-700 text-white rounded-full font-extrabold right-2 bottom-4 hover:boder-cyan-700 hover:bg-cyan-900">
                    <AiOutlinePlusCircle />
                </div>
                </Link>
            </div>

        </>
    )
}

export default post
export async function getServerSideProps(context) {

    const query = `*[_type=="posts"]`
    const post = await client.fetch(query)
    return {
        props: {
            post
        }
    }
}