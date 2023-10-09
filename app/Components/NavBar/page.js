import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <header>
      <nav className="navbar-parent navbar navbar-expand-lg py-4 fixed-top">
        <div className="container">
          <div>
            <h3>
              {" "}
              <Link className="links text-warning" href="/">
                FRONTEND BOOTCAMP
              </Link>
            </h3>
          </div>
          {/* Hamburger menu  */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars text-white"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav text-white text-center text-lg-start">
              <li className="nav-item">
                <Link className="links" aria-current="page" href="/">
                  What you'll Learn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="links" href="/Questions">
                  Questions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="links" href="/Instructors">
                  Instructors
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
