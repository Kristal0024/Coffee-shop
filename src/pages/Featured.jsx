import React from 'react'
import Latte from '../assets/latte.png'
import Card from '../components/Card'
const data=[
  {id:1,title:"Vanilla Bean Latte", price:"Rs 560", desc:"smooth espresso blended with steamed milk and real Madagascar vanilla bean syrup.",img:Latte},
  {id:2,title:"Vanilla Bean Latte", price:"Rs 560", desc:"smooth espresso blended with steamed milk and real Madagascar vanilla bean syrup.",img:Latte},
  {id:3,title:"Vanilla Bean Latte", price:"Rs 560", desc:"smooth espresso blended with steamed milk and real Madagascar vanilla bean syrup.",img:Latte},
]

const Featured = () => {
  return (
    <>
    <div className="menuWrapper px-8 py-20 w-full min-h-screen bg-(--color-background)">
        <div className="heading flex flex-col text-center mb-16 gap-3">
        <h1 className='text-3xl'>Featured Favorites</h1>
            <p>Hand-picked selections from our seasonal menu, crafted to perfection.</p>
        </div>
        <div className="cards flex justify-around">
         { data.map((e)=>(
            <Card key={e.id} {...e}/>
          ))}
        </div>
    </div>
    </>
  )
}

export default Featured
