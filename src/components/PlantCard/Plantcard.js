import axios from 'axios'
import "./PlantCard.css"
import React from 'react'
import toast, {Toaster} from 'react-hot-toast'

function Plantcard({_id,name,category,image,price,description,LoadPlants}) {


  const deleteplant =async(plantid) =>{

    const response =  await axios.delete(`${process.env.React_APP_API_URL}/plant/${plantid}`)

    toast.success(response.data.message)
    LoadPlants()
}


 

  return (
    <div className="plant-card">
        <h1 className="plant-title">{name} </h1>
        <img src={image} className="plant-img" alt="plant-img"/>
        <p className="plant-price">price:{price}</p>
         <p>{description}</p>
         <p> category:  {category}</p>
         <div>
         <button 
         type="button" 
         className="action-button"
         onClick={()=>{
          updateplant((_id))
          }} > 
          Update</button>

         <button 
         type="button" 
         className="action-button"
         onClick={()=>{
         deleteplant((_id))
         }}> 
         delete</button>
         </div> 
         <Toaster />
    </div>
  )
}

export default Plantcard