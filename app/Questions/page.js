import React from "react";

function page() {
  return (
      <section className="py-5" id="questions">
        <div className="container text-center">
          <h2 className="heading">Most Frequently Asked Questions</h2>
          {/* <!-- Accordian Component of bootstrap --> */}
          <div className="accordion accordion-flush" id="questions">
            {/* <!-- Item 1 --> */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis perspiciatis eligendi accusantium pariatur
                  repudiandae quasi doloribus excepturi culpa cum eum.
                </div>
              </div>
            </div>
            {/* <!-- Item 2 --> */}
            <div className="accordion-item py-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis perspiciatis eligendi accusantium pariatur
                  repudiandae quasi doloribus excepturi culpa cum eum.
                </div>
              </div>
            </div>
       
            {/* <!-- Item 3 --> */}
            <div className="accordion-item py-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis perspiciatis eligendi accusantium pariatur
                  repudiandae quasi doloribus excepturi culpa cum eum.
                </div>
              </div>
            </div>
      
            {/* <!-- Item 4 --> */}
            <div className="accordion-item py-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                >
                  Accordion Item #4
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis perspiciatis eligendi accusantium pariatur
                  repudiandae quasi doloribus excepturi culpa cum eum.
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </section>
  );
}

export default page;
