import React from "react";

function Cards() {
  return (
    <div className="cards-container">
      <div className="container text-center">
        <div className="row justify-content-evenly g-3 g-lg-0">
          <div className="col-md-3">
            <div className="card bg-dark text-light py-4 p-lg-4">
              <i className="fa-solid fa-laptop display-2"></i>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-secondary text-light py-4 p-lg-4">
              <i className="fa-solid fa-mobile display-2"></i>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-dark text-light py-4 p-lg-4">
              <i className="fa-solid fa-computer display-2"></i>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
