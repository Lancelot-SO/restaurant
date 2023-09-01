"use client"

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const LoginPage = () => {

  const { data, status } = useSession();

  console.log("data: "+ data)
  console.log("status: "+ status)

  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      {/*Box */}
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full
      lg:w-[60%] 2xl:w-1/2'>
        {/* image container */}
        <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
          <Image src="/loginBg.png" alt='' fill className='object-cover'/>
        </div>
        {/* form container */}
        <div className='p-10 flex flex-col gap-8 md:w-1/2'>
          <h1 className='font-bold text-xl xl:text-3xl'>Welcome</h1>
          <p>Log into  your account or create a new one using social buttons</p>

          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'
          onClick={() =>signIn("google")}
          >
            <Image src="/google.png" alt='' width={20} height={20} className='object-contain'/>
            <span>Sign in with Google</span>
          </button>

          <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md'>
            <Image src="/facebook.png" alt='' width={20} height={20} className='object-contain'/>
            <span>Sign in with Facebook</span>
          </button>
          <p className='text-sm'>
            Have a problem?<Link href="/" className='underline text-blue-400'> Contact us</Link>
          </p>
        </div>
      </div>  
    </div>
  )
}

export default LoginPage;
