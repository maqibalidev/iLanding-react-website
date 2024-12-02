import React from 'react'
import './heading.css'
const Heading = ({heading,desc}) => {
  return (
    <div className="custom-heading d-flex align-items-center flex-column">
        <h1 className="heading position-relative fs-bold">{heading}</h1>
        <p className="desc text-center">
          {desc}
        </p>
      </div>
  )
}

export default Heading
