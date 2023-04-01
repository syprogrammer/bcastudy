import React, { useState } from 'react'
import { client } from '../client';
import { AiOutlineSend } from 'react-icons/ai'
const Comments = () => {
    const [formData, setFormData] = useState({ name: '', comment: '', postid: '' });
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });


    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="text-xl text-center w-fit">
                    Comments
                </div>
                <div className="w-fit my-8">
                    <form
                        className="flex items-center gap-2"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Enter comments"
                            className='py-2 px-4 w-[300px] md:w-[350px] border'
                            name="comment"
                            minLength="5"
                            maxLength="25"
                            value={formData.comment}
                            onChange={handleChangeInput}
                        />
                        <button type="submit " className="text-2xl"><AiOutlineSend /></button>
                    </form>
                </div>
                <div className="list w-fit">

                </div>
            </div>
        </>
    )
}

export default Comments