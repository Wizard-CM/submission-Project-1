import React from "react";

function Signup() {
  return (
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
  );
}

export default Signup;
