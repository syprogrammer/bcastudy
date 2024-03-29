import React, { useState, useEffect } from 'react'
import { client } from '../client';
import useSWR from "swr"

import { AiOutlineSend } from 'react-icons/ai'
import { useSession } from 'next-auth/react'
import { BiCalendar } from 'react-icons/bi'

import Time from './utils/Time'
import Link from 'next/link'
const Comments = ({ postid, allcomments }) => {

    const [comment, setComment] = useState("✏️");
    const [comments, setComments] = useState();
    const [reload , setReload]= useState()

    const handleFetchData = async () => {
        try {
            // const response = await fetch(`https://bcastudy.vercel.app/api/comment?id=${postid}`);
            // const data = await response.json();
            // const query = `*[_type=="comment" && postid=="${postid}"]`
            const query = `*[_type == "comment" && postid=="${postid}" && dateTime(now()) > dateTime(commentdate)] | order(_createdAt desc){
                ...,
                 "time": dateTime(now()) - dateTime(commentdate)
               }`
            const data = await client.fetch(query)
            console.log(data)
            setComments(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        try {
            handleFetchData()
        } catch (err) {
            console.log(err)
        }
    }, [reload])


    
    const { data: session } = useSession()


    const handleSubmit = (e) => {
        e.preventDefault();
        const commentData = {
            _type: 'comment',
            name: session.user.name,
            comment: comment,
            postid: postid,
            image: session.user.image,
            commentdate: new Date()
        };
        console.log(commentData)
        client.create(commentData)
            .then(() => {
                console.log("you successfully commented")             
                setReload(commentData)
                
            })
            .catch((err) => console.log(err));
        setComment(" ")
        
        
    };


    return (
        <>
            <div className="flex flex-col justify-center items-center pt-8 border-t">
                <div className="text-2xl text-center w-fit">
                    Comments
                    <p className='text-center text-sm text-gray-500'>Comments take few seconds to update</p>
                </div>
                <div className="w-fit my-8 md:p-5 max-w-[70%] ">
                

                    {
                        session ? (
                            <form
                                className="flex items-center gap-2 border px-1 rounded-lg "
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="text"
                                    placeholder="Add a comment..."
                                    className='py-2 px-4 w-[300px] md:w-[450px] '
                                    name="comment"
                                    minLength="8"
                                    maxLength="60"
                                    onChange={(e) => setComment(e.target.value)}
                                    value={comment}
                                />
                                
                                <button type="submit " className="text-2xl border-l py-2 px-2 text-cyan-900"><AiOutlineSend /></button>
                            </form>
                        ) : (
                            <Link href="/login">
                                <div className="border p-2 text-cyan-800 border-cyan-900 rounded-lg hover:bg-cyan-800 hover:text-white">
                                    <button >Login to comment</button>
                                </div>
                            </Link>
                        )
                    }
                </div>
                <div className="list w-full px-8">
                    {
                        comments && (
                            <div className="flex flex-col gap-5 text-sm">

                                {
                                    comments.map((cm) => {
                                        return (
                                            <div key={cm._id} className='flex flex-col px-5 border-0 border-b pb-1'>
                                                <div className="flex items-center gap-4 ">
                                                    <div className="">
                                                        <img src={cm.image} alt=""
                                                            className='rounded-full w-[40px]'
                                                        />
                                                    </div>
                                                    <div className="flex flex-col break-words">
                                                        <div className="">{cm.name}</div>
                                                        <div className="">{cm.comment}</div>
                                                    </div>

                                                </div>


                                                <div className="pl-14 py-1 text-[10px] text-gray-400 flex gap-2 flex-wrap items-center">
                                                    <div><BiCalendar /></div>
                                                    <div><Time num={cm.time}/></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Comments
