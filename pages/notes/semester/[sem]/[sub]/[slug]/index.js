import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import { client } from '../../../../../../client';
import { useRouter } from 'next/router'
import Comments from '../../../../../../components/Comments'

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
        <div className="relative w-full h-fit m-2 mx-auto">
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

const index = ({ post}) => {
  
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  
  return (
    <div className='py-8 w-full'>
      <div className='text-center font-bold'>{post[0].name}</div>
      <div className=' flex flex-wrap gap-10 p-1 justify-center w-full'>
        <div className="container break-words border leading-loose  p-4 md:p-10  flex flex-col justify-center w-full md:w-[85%] mx-auto">
         
          <PortableText
            value={post[0].content}
            components={RichTextComponent}
          />

        </div>

      </div>
      <div className="mt-14">
        <Comments postid={post[0]._id}/>
      </div>
    </div>
  )
}

export default index

export async function getStaticPaths() {
    const query = `*[_type =="notes"]`
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
    const query = `*[_type =="notes" && slug.current=="${params.slug}"]`
    const data = await client.fetch(query)
   
    return {
        props: {
            post:data
        },
    };
}


