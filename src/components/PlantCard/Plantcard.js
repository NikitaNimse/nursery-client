import "./PlantCard.css"
import React from 'react'

function Plantcard({_id,name,category,image,price,description}) {
  return (
    <div className="plant-card">
        <h1 className="plant-title">{name}</h1>
        <p className="plant-price">price:{price}</p>
    </div>
  )
}

export default Plantcard