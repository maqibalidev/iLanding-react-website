import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../icon/Icon'

const ServiceItem = ({data}) => {
  return (
    <div className="service-item rounded-3 d-flex">
    <Icon
    rounded={false}
    icon={ <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      fill="currentColor"
      className="bi bi-activity"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"
      />
    </svg>}
    />
    <div className="text-sec">
    <h5 className='heading ' >Nescuent Mete</h5>
    <p className='desc x_small-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, magnam error veritatis fugit exercitationem delectus</p>
    <Link className='service-item-btn d-flex align-items-center'>Read More ➝
   
    </Link>

    </div>

 </div>
  )
}

export default ServiceItem
