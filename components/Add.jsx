import React from 'react'

const Add = () => {
  return (
    <>
    <div className="bg-white p-4 flex flex-col gap-2 absolute top-10 w-[90%] mx-auto z-20">
        <div className="">Create Post</div>
        <div className="form">
            <form>
                <label>
                    title
                    <input type="text"
                    className='border py-1 px-2'
                    placeholder="Enter title"
                    />
                </label>
            </form>
        </div>
    </div>
    </>
  )
}

export default Add