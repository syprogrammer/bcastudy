import React from 'react'

const add = () => {
  return (
    <>
    <div className="bg-white my-8 p-4 flex flex-col gap-2  w-[90%] md:w-[65%] mx-auto z-20">
        <div className="text-center">Create Post</div>
        <div className="form">
            <form
            className='flex flex-col '
            >
                <label className="flex flex-col">
                    title
                    <input type="text"
                    className='border py-1 px-2 rounded-sm'
                    placeholder="Enter title"
                    />
                </label>
                <label className="flex flex-col">
                    image url(optional)
                    <input type="text"
                    className='border py-1 px-2 rounded-sm'
                    placeholder="Enter title"
                    />
                </label>
                <label className="flex flex-col">
                    Post
                    <textarea
                    type="text"
                    className="border rounded-sm"
                    />
                </label>
            </form>
        </div>
    </div>
    </>
  )
}

export default add