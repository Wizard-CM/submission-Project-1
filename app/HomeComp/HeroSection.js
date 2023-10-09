import React from 'react'
import img2 from '../Images/showcase.svg'
import Image from 'next/image'

function HeroSection() {
  return (
    <div className="container">
    <div className="row align-items-center py-5 p-lg-0">
      <div className="col-lg-6 text-center text-lg-start">
        <h1>
          Become a <span className="text-warning">Web Developer</span>
        </h1>
        <p className="lead my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          iste distinctio voluptate sed, consequatur dicta. Rerum est, nemo
          totam itaque veritatis vero perferendis velit dicta, sit, corrupti
          repellendus. Eaque assumenda culpa eos similique ex debitis
          officiis inventore ducimus deserunt velit.
        </p>
        <button
          className="btn btn-primary btn-lg mb-5"
          data-bs-toggle="modal"
          data-bs-target="#enroll"
        >
          Get Enrolled
        </button>
      </div>
      <div className="col-lg-6">
        <Image className="img-fluid" src={img2} alt="" />
      </div>
    </div>
  </div>
  )
}

export default HeroSection