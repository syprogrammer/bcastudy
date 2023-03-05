import React, { useState } from 'react'
import { client } from '../client';
import Image from 'next/image'
import { AiOutlineMessage } from 'react-icons/ai'
const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { name, email, messageinput } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });


    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const messageData = {
            _type: 'message',
            name: formData.name,
            email: formData.email,
            message: formData.messageinput,
        };

        client.create(messageData)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className='my-5 border p-5 shadow' id='contact'>


                {!isFormSubmitted ? (
                    <div className="shadow-lg p-5 w-fit mx-auto rounded-lg px-5 md:px-12">
                        <div className="py-4 mt-2 flex flex-col text-center gap-2 items-center justify-center text-2xl text-cyan-800">
                            <div className="flex gap-2 items-center">
                                <AiOutlineMessage />
                                <span>Message</span>
                            </div>
                            <span className='text-sm'>If you want your notes and pdf on website send me google drive link</span>
                        </div>
                        {loading ? (
                            <div className="">
                                <div className="flex flex-col justiy-center py-6">
                                    <div className="mx-auto w-fit ">
                                        <svg aria-hidden="true" className="inline w-[200px] h-[200px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-cyan-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="">
                                <form
                                    className='flex flex-col gap-2 justify-center w-fit mx-auto'
                                    onSubmit={handleSubmit}
                                >
                                    <div className="mt-10 flex flex-col gap-1  shadow-sm">
                                        <label  className='flex flex-col gap-2'>
                                            Enter your name
                                        <input
                                            id='name'
                                            name='name'
                                            type='text'
                                            required
                                            minLength="3"
                                            maxLength="25"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={handleChangeInput}
                                            className=' border w-[300px] md:w-[500px] py-2 px-5 text-gray-500 hover:text-gray-900 rounded-lg'
                                        />
                                        </label>
                                    </div>
                                    <div className="my-2 flex flex-col gap-1  shadow-sm">
                                        <label  className='flex flex-col gap-2'>Enter your email
                                        <input
                                            id='email'
                                            name='email'
                                            type='email'
                                            required
                                            minLength="3"
                                            maxLength='20'
                                            placeholder="Your Email"
                                            value={email}
                                            onChange={handleChangeInput}
                                            className='border w-[300px] md:w-[500px] py-2 px-5 text-gray-500 hover:text-gray-900 rounded-lg '
                                        />
                                        </label>
                                    </div>
                                    <div className="my-2 flex flex-col gap-1  shadow-sm">
                                        <label  className='flex flex-col gap-2'>Enter message
                                        <textarea
                                            id='message'
                                            placeholder="Your Message"
                                            value={messageinput}
                                            name="messageinput"
                                            required
                                            minLength="20"
                                            maxLength='400'
                                            onChange={handleChangeInput}
                                            className='border w-[300px] md:w-[500px] p-5 text-gray-500 hover:text-gray-900 rounded-lg'
                                        />
                                        </label>
                                    </div>
                                    <button

                                        className='bg-white p-2 px-6 w-fit rounded-lg mx-auto text-cyan-700 border border-cyan-800 hover:bg-cyan-700 hover:text-white '>
                                        Send
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-col justify-center py-4">
                            <Image src='/birdmessage.png'
                                width='100'
                                height='100'
                                alt="sent"
                                className='mx-auto py-4 w-[200px]'
                            />
                            <h3 className="head-text p-5 text-center text-2xl py-10">
                                Thank you for getting in touch!
                            </h3>
                        </div>
                    </div>
                )}

            </div>

        </>
    )
}

export default Contact