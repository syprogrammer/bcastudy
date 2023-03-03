import { useRouter } from 'next/router'
import { SlCalender } from 'react-icons/sl';
import Link from 'next/link'
import { client } from '../../../../client'
const index = ({ subjects }) => {
 
    
    const router = useRouter()
    const { sem } = router.query
    if (router.isFallback) {
      return <div>Loading...</div>
    }
    return (
        <div className='py-8'>
            <div className='text-xl font-semibold flex justify-center items-center gap-2 p-5'>
                <SlCalender />
                <h2 className=''>Select Your Subject</h2>

            </div>

            <div className='text-2xl flex flex-wrap gap-10 p-5 justify-center'>

                {subjects.map((item) => (

                    <Link
                        key={item._id}
                        className=' p-5 w-[360px]  md:w-[320px] text-center border  hover:cursor-pointer hover:bg-cyan-500 shadow-md rounded-lg'

                        href={`/questionpaper/semester/${sem}/${item.subject}`}    >
                        <span className='text-sm'>{item.subject.toUpperCase()}</span>
                    </Link>

                ))}

            </div>
        </div>
    )
}

export default index

export async function getStaticPaths() {
    return {
        paths: [
            { params: { sem: '1' } },
            { params: { sem: '2' } },
            { params: { sem: '3' } },
            { params: { sem: '4' } },
            { params: { sem: '5' } },
            { params: { sem: '6' } },
        ],
        fallback: true
    }
}
export async function getStaticProps(context) {
    const { params } = context
    const query = `*[_type =="subjects" && semester=="${params.sem}" ]`
    console.log(query)
    const data = await client.fetch(query)
    console.log(data)
    return {
        props: {
            subjects: data
        },
    };
}
