import { Product } from '@/types/types';
import Image from 'next/image'
import React from 'react'


const getData = async () => {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
}

const Featured = async () => {

  const featuredProducts:Product[] = await getData();
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
        {/*wrapper */}
      <div className='w-max flex'>
        {/*SINGLE ITEM */}
        {
            featuredProducts.map((item) => (

            <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4
            hover:bg-fuchsia-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
            {/*image container */}
            { item.img && (<div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                <Image src={item.img} alt='' fill className='object-contain'/>
            </div>)}
            {/*text container */}
            <div className='flex-1 flex flex-col text-center items-center gap-4 justify-center'>
                <h2 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h2>
                <p className='p-4 2xl:p-8'>{item.desc}</p>
                <span className='text-xl font-bold'>${item.price}</span>
                <button className='bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
            </div>
        </div>
            ))}
      </div>
    </div>
  )
}

export default Featured
