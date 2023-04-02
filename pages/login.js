import React from 'react'
import Link from 'next/link'
import { useFormik } from 'formik';
import { AiOutlineLogin } from 'react-icons/ai'
import { useSession, signIn, signOut } from 'next-auth/react'
import { login_validate } from '../lib/validate';
import { useRouter } from 'next/router'

const login = () => {
    const router = useRouter()

    const handleGoogleSignin = async () => {
        await signIn('google', { callbackUrl: "/" })
        
    }

    return (
        <>
            <section className="min-h-screen flex flex-col-reverse py-10 w-[70%] justify-center mx-auto items-center"

            >
                <div className="mb-4 w-[90%]  mx-auto">
                    <img src="/banner.jpg" alt="" className='w-[full]' />
                </div>
               

                    <div
                        type="button"
                        className='text-sm w-fit  border flex items-center justify-center text-center gap-2 py-3 px-5 my-1 rounded-lg  cursor-pointer hover:border-cyan-800'
                        onClick={handleGoogleSignin}
                    >
                        <img src="/google.png" alt=""
                            className='w-[18px]'
                        />
                        <span className="text-sm md:text-lg">Sign in/Sign up with google</span>
                 
                </div>
            </section>

        </>
    )
}

export default login