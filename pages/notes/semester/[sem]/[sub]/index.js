import { useRouter } from 'next/router'
import { SlCalender } from 'react-icons/sl';
import Link from 'next/link'
import { client } from '../../../../../client'
const index = ({ notes }) => {
const router = useRouter()
    if (router.isFallback) {
      return <div>Loading...</div>
    }
    return (
        <div className='py-8'>
            <div className='text-xl font-semibold flex justify-center items-center gap-2 p-5'>
                <SlCalender />
                <h2 className=''>list</h2>

            </div>

            <div className='text-2xl flex flex-wrap gap-10 p-5 justify-center'>

                {notes.map((note) => (
             
                        <Link
                        key={note._id}
                        className=' p-5 w-[320px]  md:w-[400px] text-center border  hover:cursor-pointer hover:bg-cyan-500 shadow-md rounded-lg'
                        href={`/notes/semester/${note.semester}/${note.subject}/${note.slug.current}`}>  
                            <span className='text-sm'>{note.name.toUpperCase()}</span>
                        </Link>
                
                ))}

            </div>
        </div>
    )
}

export default index

export async function getStaticPaths() {
    const query = `*[_type =="subjects"]`
    const data = await client.fetch(query)
    const paths = data.map((item) => ({
        params: { sem: item.semester, sub: item.subject },
    }))

    return {
        paths,
        fallback: true
    }
}
export async function getStaticProps(context) {
    const { params } = context
    const query = `*[_type =="notes" && semester=="${params.sem}" && subject=="${params.sub}"]`

    const data = await client.fetch(query)
    
    return {
        props: {
            notes: data
        },
    };
}
