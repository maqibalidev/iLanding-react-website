import React from 'react'
import Button from '../../button/Button'

const ContactUs = () => {
  return (
    <div className="faq-bottom d-flex  justify-content-center align-items-center">
    <div className="faq-bottom-container d-flex flex-column align-items-center">
      <h1 className="heading text-center text-light">Call To Action</h1>
      <p className="desc text-center  text-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa
        eius dolore ab tempore nisi! Tempore deleniti soluta molestiae
        consectetur.
      </p>
      <Button btn_text="Call To Action" btn_size="large" pH='45px' py='12px'/>

    </div>
  </div>
  )
}

export default ContactUs
