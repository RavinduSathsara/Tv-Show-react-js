import React from "react";

const TvNavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Braking Bad
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a
                  className="nav-link "
                  aria-current="page"
                  href="#"
                  onClick={props.gotoHome}
                >
                  Cast
                </a>
              </li>
              <li className="nav-item">
                <a onClick={props.action} className="nav-link" href="#">
                  Episodes
                </a>
              </li>
              <li className="nav-item">
                <a onClick={props.quotesShow} className="nav-link" href="#">
                  Quotes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TvNavBar;
