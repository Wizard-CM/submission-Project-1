import image2 from "./Images/showcase.svg";
import image1 from './Images/fundamentals.svg'
import Image from "next/image";

export default function Home() {
  console.log(image2);
  return (
    <main>
      <div className="container">
        <div className="row align-items-center py-5 p-lg-0">
          <div className="col-lg-6">
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
            <Image className="img" src={image2} alt="" />
          </div>
        </div>
      </div>

      {/* Sign Up Section */}
      <div className="signup py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-4">
              <button className="btn btn-primary btn-lg w-100 modify-btn">
                Sign Up
              </button>
            </div>
            <div className="col-lg-9 col-8">
              <input
                type="text"
                class="form-control custom-input py-2"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        <div className="container text-center">
          <div className="row justify-content-evenly g-3 g-lg-0">
            <div className="col-md-3">
              <div className="card bg-dark text-light py-4 p-lg-4">
                <i className="fa-solid fa-laptop display-2"></i>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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

      {/* Fundamental Section */}
      <section id="learn" className="">
      <div className="container">
        <div className="row align-items-center gap-3">
          <div className="col-md">
            <Image src={image1} className="img"  alt="" />
          </div>
          <div className="col-md">
            <h1>Learn the fundamentals</h1>
            <p className="lead py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quaerat impedit obcaecati incidunt ad mollitia a corporis eligendi
              aliquid voluptates minus beatae, laboriosam recusandae dolorem,
              fugiat quos. Ipsa, itaque. Illo eum tenetur a culpa dolorum
              consectetur rerum est, asperiores molestias incidunt. Incidunt,
              officiis ex maxime velit sed enim veritatis quae?
            </p>
            <a href="#" className="btn btn-dark text-light">Read More</a>
          </div>
        </div>
      </div>
    </section>

    </main>
  );
}
