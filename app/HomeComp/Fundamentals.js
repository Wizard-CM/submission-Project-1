import React from "react";
import Image from "next/image";
import img1 from "../Images/fundamentals.svg"


function Fundamentals() {
  return (
    <section id="learn" className="">
      <div className="container">
        <div className="row align-items-center gap-3">
          <div className="col-md">
            <Image src={img1} className="img" alt="" />
          </div>
          <div className="col-md text-center text-lg-start">
            <h1>Learn the fundamentals</h1>
            <p className="lead py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quaerat impedit obcaecati incidunt ad mollitia a corporis eligendi
              aliquid voluptates minus beatae, laboriosam recusandae dolorem,
              fugiat quos. Ipsa, itaque. Illo eum tenetur a culpa dolorum
              consectetur rerum est, asperiores molestias incidunt. Incidunt,
              officiis ex maxime velit sed enim veritatis quae?
            </p>
            <a href="#" className="btn btn-dark text-light">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fundamentals;
