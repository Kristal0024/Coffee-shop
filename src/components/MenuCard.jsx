import React from 'react'

const MenuCard = ({title,items}) => {
  return (
    <>
<div className="cardWrapper py-2">
<h1 className='text-center pt-4 font-gotham text-xl'>{title}</h1>
<hr className='border-1' />
<div className="flex justify-between pt-5">
{items.map((item)=>(
<div className="flex flex-col" key={item.name}>
<p className='font-Railway'>{item.name}</p>
<p className='font-medium font-gotham'>{item.price}</p>
</div>
))}
</div>
</div>
</>
  )
}

export default MenuCard
