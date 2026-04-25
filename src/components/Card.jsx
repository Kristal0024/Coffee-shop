import React from 'react'

const Card = ({title,desc,price,img}) => {
  return (
    <div>
      <div className="">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <span>{price}</span>
      </div>
    </div>
  )
}

export default Card
