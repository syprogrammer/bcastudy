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
        <div className="relative p-4 md:w-1/2 border h-fit m-2 mx-auto ">
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
    <div className='py-8'>
      <div className='text-center'>{data &&(data[0].name)}</div>
      <div className=' flex flex-wrap gap-10 p-1 justify-center'>
        <div className="container border  p-2 md:p-10  flex flex-wrap  justify-center w-[100%] md:w-[90%] mx-auto">
        {
          data && (
           
          <PortableText
            value={data[0].content}
            components={RichTextComponent}
          />
          )
        }

        </div>

      </div>
    </div>
  )
}

export default index

export async function getStaticPaths() {
    const query = `*[_type =="questionpaper"]`
    const data = await client.fetch(query)
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
    const query = `*[_type =="questionpaper" && slug.current=="${params.slug}"]`
  
    const data = await client.fetch(query)
  
    return {
        props: {
            data:data
        },
    };
}

