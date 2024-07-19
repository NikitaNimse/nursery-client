import'./Home.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Plantcard from '../../components/PlantCard/Plantcard';
import { Link } from 'react-router-dom';
import Imgadd from './Add.png'

function Home() {


    const [plants,setplants]= useState([])


    const LoadPlants =  async ()=>{
        const response = await axios.get(`${process.env.React_APP_API_URL}/plants`)
        setplants(response.data.data) 
      }

    useEffect(()=>{
        LoadPlants()  
    },[])

  return (
    <div>
        <h1>plants</h1>
     {
        plants.map((plant,i)=>{

            const {_id,
                name,
                category,
                image,
                price,
                description} = plant

        return (<Plantcard
          key={i}
          _id={_id}
          name={name}
          category={category}
          image={image}
          price={price}
          description={description}
         LoadPlants ={LoadPlants}
         />
        )
        })
           
     }
     <Link to="/add">
     <img src={Imgadd} className='add-btn' alt="add"/>
     </Link>

    </div>
  )
}


export default Home
