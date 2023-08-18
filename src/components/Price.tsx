"use client"

import React, { useState } from 'react'

type Props = {
    price: number;
    id: number;
    options?: { title: String; additionalPrice: number} []
}

const Price = ({ price, id, options} : Props) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);


  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>${price.toFixed(2)}</h2>
      {/*options container*/}
      <div className='flex gap-4'>
        {
            options?.map((option, index) => (
                <button key={option.title}
                className='p-2 min-w-[6rem] ring-1 ring-red-400 rounded-md'
                style = {{
                    background: selected === index ? "rgb(248 113 113)" : "white",
                    color: selected === index ? "white" : "red"
                }}
                >
                    {option.title}
                </button>
            ))
        }
      </div>
      {/*quantity container*/}
      <div className='flex justify-between items-center'>
        <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
            <span>Quantity</span>
            <div className='flex gap-4'>
                <button>{'<'}</button>
                <span>1</span>
                <button>{'>'}</button>
            </div>
        </div>
        <button className='uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Price
