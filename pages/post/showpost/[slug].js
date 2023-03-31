import React from 'react'
import { BiCategoryAlt, BiCalendar } from 'react-icons/bi'
import { BsPersonFill } from 'react-icons/bs'
import {client} from '../../../client'
const index = ({ post }) => {   
    console.log("post", post[0])
    return (
        <>
            <div className="p-2 min-h-screen ">
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="w-full md:w-[60%]">
                        <img src={post[0].imgurl}
                            className='w-full'
                            alt="" />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="flex gap-2 items-center  py-1 px-2 text-sm text-gray-700">
                            <BiCategoryAlt />
                            <div className="">{post[0].category}</div>
                        </div>
                        <div className='flex gap-2 items-center  py-1 px-2 text-sm text-gray-700'>
                            <BsPersonFill />
                            <span>{post[0].author}</span>
                        </div>
                        <div className="flex gap-2 items-center  py-1 px-2 text-sm text-gray-700">
                            <BiCalendar />
                            {/* <span>{post[0].created_at.slice(0,10)}</span> */}
                        </div>
                    </div>
                    <div className="title text-center text-2xl font-semibold">
                        <h1>{post[0].title}</h1>
                    </div>
                    <div className="w-[95%] md:w-[75%] tracking-wide leading-8 mx-auto flex flex-col flex-wrap gap-2 break-words">
                        {post[0].content}
                    </div>
                </div>
            </div>
        </>
    )
}



// export async function getStaticPaths() {

//     const response = await fetch(`${process.env.URI}/api/auth/post`)
//     const paths = await response.json()
//     return {
//         paths: paths.map((slug) => (
//             { params: { slug: slug._id } }
//         )),
//         fallback: true,
//     }
// }
export async function getServerSideProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const slug = context.params.slug
    const query = `*[_type =="posts" && title=="${slug}"]`
    const post = await client.fetch(query)
    return {
        props: {
            post
        }
    }
}
export default index