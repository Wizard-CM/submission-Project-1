import React from "react";

function page() {
  return (
    // <!-- Instructors-section -->
    <section id="instructors">
      <div className="container text-center text-white">
        <h2 className="text-warning">Our Instructors</h2>
        <h5 className="py-5">
          Our Instructors have an experience of more than 5 years
        </h5>

        <div className="row gap-3 gap-lg-0 justify-content-center">
          <div className="col-lg-3 col-md-5">
            <div className="card md-card bg-secondary text-white">
              <i className="fa-solid fa-person-dress display-4 py-3"></i>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text py-lg-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-dark text-light btn-lg">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="card bg-secondary md-card1 text-white">
              <i className="fa-solid fa-person-dress display-4 py-3"></i>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text py-lg-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-dark text-light btn-lg">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="card bg-secondary md-card2 text-white">
              <i className="fa-solid fa-person-dress display-4 py-3"></i>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text py-lg-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-dark text-light btn-lg">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="card bg-secondary md-card3 text-white">
              <i className="fa-solid fa-person-dress display-4 py-3"></i>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text py-lg-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-dark text-light btn-lg">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
