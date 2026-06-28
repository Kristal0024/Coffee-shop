import React from 'react'
import MenuCard from '../components/MenuCard'
const data=[
{
title:"Espresso",
items:[{name:"Espresso",price:"Rs 550"},{name:"Double Espresso",price:"Rs 750"},
{name:"Americano",price:"Rs 550"}]
},
{
title:"Hot Coffee",
items:[
{name:"cappuccino",price:"Rs 550"},
{name:"cappuccino",price:"Rs 550"},
{name:"cappuccino",price:"Rs 550"},
]
},
{
title:"Iced Coffee",
items:[
{name:"cappuccino",price:"Rs 550"},
{name:"cappuccino",price:"Rs 550"},
{name:"cappuccino",price:"Rs 550"},
]
},
{
title:"Special Drinks",
items:[
{name:"cappuccino",price:"Rs 550"},
{name:"cappuccino",price:"Rs 550"},
{name:"cappuccino",price:"Rs 550"},
]
},
{
title:"Tea",
items:[
{name:"cappuccino",price:"Rs 550"},
{name:"cappuccino",price:"Rs 550"},
{name:"cappuccino",price:"Rs 550"},
]
},
{
title:"Snacks",
items:[
{name:"cappuccino",price:"Rs 550"},
{name:"cappuccino",price:"Rs 550"},
{name:"cappuccino",price:"Rs 550"},
]
},
]
const Menu = () => {
  return (
    <>
<div className="menuwrapper w-[100%] xl:px-80 lg:px-70 flex flex-col">
<h1 className='py-2 font-medium font-gotham text-xl'>Menu</h1>
<div className="content mb-5">
{
data.map((e)=>(
<MenuCard key={e.title} {...e} />
))
}
</div>
</div>
</>
  )
}

export default Menu
