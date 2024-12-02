import React from 'react'
import Button from '../../button/Button'
const PricingItem = ({isPopular=false,data}) => {
  return (
    <div className={`pricing-item  d-flex flex-column rounded-4 ${isPopular && 'popular-item'}`}>
    <h3 className="heading ">Basic Plan</h3>

    <div className="price">
      <span className="price text-dark" >
        <sup className="text-dark">$</sup>9.9
      </span>
        <span className="month small-text fw-normal"> / month</span>
    </div>
<p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque sit illum blanditiis molestias eius exercitationem quos consectetur, tempore dolorum est?</p>
  <h5 className=' ul-heading'>Featured included:</h5>
    <ul>
 {
  [...Array(4)].map((_,key)=>(

      <li key={key} className="small-text d-flex align-items-center">
      <span className='li-icon rounded-circle d-flex align-items-center justify-content-center'>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="rgb(62, 165, 3)"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
      </span>
        Lorem ipsum dolor sit amet
      </li>
  ))
 }
    
    </ul>
    <Button btn_text="Buy Now ➝" pH='18px' btn_size="large"/>
  </div>
  )
}

export default PricingItem
