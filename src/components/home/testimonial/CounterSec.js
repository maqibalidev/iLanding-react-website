import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { about } from '../../../assets/data';

const CounterSec = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
  return (
    <div className="about-bottom-container">
    <div
      className="about-bottom custom-container  d-flex flex-wrap align-items-center h-100 justify-content-center justify-content-sm-between"
      ref={ref}
    >
      {inView && (
        <>
          {about.aboutCounter.map((data, index) => (
            <div
              key={index}
              className="about-bottom-item d-flex flex-column align-items-center  "
            >
              <CountUp
                separator=""
                className="heading position-relative"
                start={0}
                end={data.count}
                duration={2}
                delay={0}
              />
              <span className="desc text-center">{data.desc}</span>
            </div>
          ))}
        </>
      )}
    </div>
  </div>
  )
}

export default CounterSec
