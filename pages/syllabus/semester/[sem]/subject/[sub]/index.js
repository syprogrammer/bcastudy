import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import { client } from '../../../../../../client';
import { useRouter } from 'next/router'
function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const RichTextComponent = {
  types: {
    image: ({ value }) => {

      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="relative w-full h-fit m-10 mx-auto">
          <img
            className='object-contain'
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value).auto('format')}

          />
        </div>
      )
    },
  }
}

const index = ({ syllabus }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div className='py-8'>
      <div className='text-center font-bold'>{syllabus && (syllabus[0].name.toUpperCase())}</div>
      <div className=' flex flex-wrap gap-10 p-5 justify-center'>
        <div className="container border  p-5 md:p-10  flex flex-col justify-center w-[95%] md:w-[85%] lg:w-[70%] mx-auto">
          {
            syllabus && (
              <PortableText
                value={syllabus[0].content}
                components={RichTextComponent}
              />)
          }
        </div>

      </div>
    </div>
  )
}

export default index


export async function getStaticPaths() {
  const query = `*[_type =="subject"]`
  const data = await client.fetch(query)
  
  const paths = data.map((item) => ({
    params: {
     
      sem: item.semester,
      sub: item.slug.current,
    },
  }))
 
  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps(context) {
  const { params } = context
  const query = `*[_type =="syllabus" && slug.current=="${params.sub}"]`

  const syllabusdata = await client.fetch(query)
  return {
    props: {
      syllabus: syllabusdata
    },
  };
}

