import React from 'react'
import Heading from '../../heading/Heading'
import "./service.css"
import ServiceItem from './ServiceItem'
const Service = () => {
  return (
    <div className='service-container'>
       <div className='custom-container'>
      
<Heading heading="Services" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolores."/>

<div className="service-items d-flex flex-wrap flex-column flex-md-row">
   {
    [...Array(4)].map((_,key)=>(
   <ServiceItem key={key}/>
    ))
   }
</div>
      </div>
    </div>
  )
}

export default Service
