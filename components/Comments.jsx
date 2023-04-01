import React, { useState, useEffect } from 'react'
import { client } from '../client';
import { AiOutlineSend } from 'react-icons/ai'
import { useSession } from 'next-auth/react'
import { BiCalendar } from 'react-icons/bi'
const Comments = ({ postid, allcomments }) => {

    const [formData, setFormData] = useState({ comment: '' });
    const [comments, setComments] = useState()
    useEffect(() => {
        fetch(
            `http://localhost:3000/api/comment?id=${postid}`)
            .then((res) => res.json())
            .then((json) => {
                setComments(json)
            })
    }, [])
    console.log("comments", comments)
    const { data: session } = useSession()

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });


    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const commentData = {
            _type: 'comment',
            name: session.user.name,
            comment: formData.comment,
            postid: postid,
            image: session.user.image,
            commentdate: new Date()
        };
        
        client.create(commentData)
            .then(() => {
                console.log("you successfully commented")
            })
            .catch((err) => console.log(err));
    };


    return (
        <>
            <div className="flex flex-col justify-center items-center pt-8 border-t">
                <div className="text-2xl text-center w-fit">
                    Comments
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
                                    className='py-2 px-4 w-[300px] md:w-[350px] '
                                    name="comment"
                                    minLength="5"
                                    maxLength="50"
                                    value={formData.comment}
                                    onChange={handleChangeInput}
                                />
                                <button type="submit " className="text-2xl border-l py-2 px-2 text-cyan-900"><AiOutlineSend /></button>
                            </form>
                        ) : (
                            <div className="">
                                <button>Login to comment</button>
                            </div>
                        )
                    }
                </div>
                <div className="list w-fit">
                    {
                        comments && (
                            <div className="flex flex-col gap-5 text-sm">

                                {
                                    comments.map((cm) => {
                                        return (
                                            <div className='flex flex-col px-5'>
                                                <div className="flex items-center gap-4 ">
                                                    <div className="">
                                                        <img src={session.user.image} alt=""
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
                                                <div>{cm.commentdate.slice(0, 10)}</div>
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
