import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="left">
            <h5>
              Copyright &copy; 2023 <br />
              All rights reserved by{" "}
              <span className="text-warning">Web Developer</span>
            </h5>
          </div>
          <div className="right text-end">
            <Link href="/">
              <i className="fa-solid fa-arrow-up p-2 bg-primary text-white rounded-5"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
