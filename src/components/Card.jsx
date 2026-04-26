import React from 'react'

const Card = ({title,desc,price,img}) => {
  return (
    <div>
      <div className="border-2 border-secondary w-94 h-98 rounded-3xl">
        <img className='rounded-t-3xl' src={img} alt={title} />
       <div className="desc p-4">
         <div className="flex justify-between mt-3 mb-1">
          <h2 className='text-var(--color-primary) text-xl'>{title}</h2>
        <span className='text-button text-lg'>{price}</span>
        </div>
        <p className='mb-4 text-sm text-p'>{desc}</p>
       <button className=' w-full p-3 rounded-xl bg-secondary cursor-pointer'>+ Add to Order</button>
       </div>
      </div>
    </div>
  )
}

export default Card
