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

const index = ({ data }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div className='py-8 w-full'>
      <div className='text-center font-bold'>{data[0].name}</div>
      <div className=' flex flex-wrap gap-10 p-5 justify-center w-full'>
<<<<<<< HEAD
        <div className="container break-words border leading-loose p-5 md:p-10  flex flex-col justify-center w-[98%] md:w-[85%] mx-auto">
=======
        <div className="container break-words border leading-loose  p-5 md:p-10  flex flex-col justify-center w-[98%] md:w-[85%] mx-auto">
>>>>>>> 5eac1bf1981d670341d8da3050542718604d95f4
         
          <PortableText
            value={data[0].content}
            components={RichTextComponent}
          />

        </div>

      </div>
    </div>
  )
}

export default index

export async function getStaticPaths() {
    const query = `*[_type =="notes"]`
    const data = await client.fetch(query)
   console.log(data)

    const paths = data.map((item) => ({
    
        params: { 
            slug:item.slug.current,
            sem:item.semester,
            sub:item.subject
                },
               
      }))

    return {
        paths,
        fallback: true
    }
}
export async function getStaticProps(context) {
    const { params } = context
    const query = `*[_type =="notes" && slug.current=="${params.slug}"]`
    const data = await client.fetch(query)
   
    return {
        props: {
            data:data
        },
    };
}

