import React from 'react'
import Icon from '../../icon/Icon'

const ContactItem = ({data}) => {
  return (
    <div className="contact-box d-flex ">
              <Icon icon={data.icon}/>
               <div className="text-sec">
               <h4 className="box-heading">{data.heading}</h4>
                <span className="box-desc small-text d-block">{data.desc_1}</span>
                <span className="box-desc small-text ">{data.desc_2}</span>
               </div>
              </div>
  )
}

export default ContactItem
