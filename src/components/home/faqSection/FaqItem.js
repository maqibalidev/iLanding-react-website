import React from 'react'

const FaqItem = ({data,handleDetailClick,index,openIndex}) => {
  return (
    <details
    key={index}
    className="det rounded-2"
    open={openIndex === index}
    onClick={(e) => handleDetailClick(index, e)}
  >
    <summary className="heading d-flex justify-content-between align-items-center list-unstyled  fw-bold">
      <span>
        {data.question}
      </span>
      <span className="summary-drop-icon d-flex align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#666666"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </span>
    </summary>
    <p className="desc">{data.ans}</p>
  </details>
  )
}

export default FaqItem
