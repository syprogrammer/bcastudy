import React from 'react'
import Add from '../components/Add'
const post = () => {
    return (
        <>

            <div className="flex flex-wrap gap-5 ">
                {
                    [1, 2, 3, 4, 5, 6].map((item) => {
                        return (
                            <div className="flex flex-col gap-5 justify-center items-center w-[90%] md:w-[46%] p-4 mx-auto">
                                <div className="img">
                                    <img src="/imageskelton.png" alt="BLOG IMAGE"
                                        className='w-[100px]'
                                    />
                                </div>
                                <div className="title text-lg">
                                    this is a blog
                                </div>
                                <div className="break-words mx-auto w-[80%]">
                                    this is a blogthis is a blogthis is a blogthis is a blog
                                    this is a blogthis is a blogthis is a blog
                                    this is a blogthis is a blog
                                </div>
                            </div>
                        )
                    })
                }
                <div className="add relative">
                    <Add />
                </div>
            </div>

        </>
    )
}

export default post