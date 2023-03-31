import React from 'react'
import { useSession, getSession } from 'next-auth/react'
import { client } from '../../../client';
import { useFormik } from 'formik';
import { post_validate } from '../../../lib/validate';
import { useRouter } from 'next/router'
const add = () => {
  const { data: session } = useSession()

  const formik = useFormik({
    initialValues: {
      title: "",
      imgurl: "https://drive.google.com/uc?export=view&id=14yk9rQ9I0NdzFMFufZFIcIGSH_sU059k",
      category: "",
      content: ""
    },
    validate: post_validate,
    onSubmit
  })

  const router = useRouter()
  async function onSubmit(values) {
    console.log(values)
    const postData = {
      _type: 'posts',
      "title": values.title,
      "imgurl": values.imgurl,
      "category": values.category,
      "author": session.user.name,
      "content": values.content

    }


    console.log("postdata", postData)
    client.create(postData)
      .then(() => {
        router.push("/post")
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="bg-white my-8 p-4 flex flex-col gap-2  w-[90%] md:w-[65%] mx-auto z-20">
        <div className="text-center text-xl font-semibold">Create Post</div>
        <div className="form">
          <form
            className='flex flex-col '
            onSubmit={formik.handleSubmit}

          >
            <label className="flex flex-col mt-4 mb-1">
              Title
              <input type="text"
                className='border py-1 px-2 rounded-sm outline-cyan-500 '
                placeholder="Enter title"
                name="title"
                {...formik.getFieldProps('title')}
              />
              {formik.errors.title && formik.touched.title ?
                (<span className='text-rose-500'>{formik.errors.title}</span>) : (<span></span>)
              }
            </label>
            <label className="flex flex-col mt-4 mb-1">
              Image URL 
              <input type="text"
                className='border text-gray-400 focus:text-black py-1 px-2 rounded-sm outline-cyan-500 '
                placeholder="Enter link"
                name="imgurl"
                {...formik.getFieldProps('imgurl')}
              />
              {formik.errors.imgurl && formik.touched.imgurl ?
                (<span className='text-rose-500'>{formik.errors.imgurl}</span>) : (<span></span>)
              }
            </label>
            <label className="flex flex-col mt-4 mb-1">
              category
              <input type="text"
                className='border py-1 px-2 rounded-sm outline-cyan-500 '
                placeholder="Enter title"
                name="title"
                {...formik.getFieldProps('category')}
              />
              {formik.errors.category && formik.touched.category ?
                (<span className='text-rose-500'>{formik.errors.category}</span>) : (<span></span>)
              }
            </label>
            <label className="flex flex-col mt-4 mb-1">
              Post
              <textarea
                type="text"
                className="border rounded-sm min-h-[100px] outline-cyan-500 p-4"
                placeholder='Maximum 250 words allowed'
                name="content"
                {...formik.getFieldProps('content')}
              />
              {formik.errors.content && formik.touched.content ?
                (<span className='text-rose-500'>{formik.errors.content}</span>) : (<span></span>)
              }

            </label>
            <button
              type="submit"
              className='border rounded-lg py-1 px-4 w-[120px] mx-auto bg-white border-cyan-500 text-cyan-600 font-bold hover:text-white hover:bg-cyan-700 my-2'
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default add

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  return {
    props: {
      session
    }
  };
}