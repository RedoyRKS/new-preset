import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-dark">
        <div className="container">
          <a href="../../index3.html" className="navbar-brand">
            <img
              src="../../dist/img/govt.png"
              alt="Govt. Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: "1.2" }}
            />
            <img
              src="../../dist/img/smart_dashboard_logo.png"
              alt="smart Logo"
              className="brand-image elevation-3"
              style={{ opacity: "1.2" }}
            />
            <span className="brand-text text-primary">Smart </span>
            <span className="brand-text font-weight-bold text-primary">
              Dashboard
            </span>
          </a>
          <button
            className="navbar-toggler order-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            {/* Left navbar links */}
            <ul className="navbar-nav">
              <li className="nav-item d-none d-sm-inline-block">
                <a href="index3.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <a href="#" className="nav-link">
                  Dashboard
                </a>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <a href="#" className="nav-link">
                  Charts
                </a>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <a href="#" className="nav-link">
                  Datasets
                </a>
              </li>
              <li className="nav-item dropdown dropdown-hover">
                <a
                  id="dropdownSubMenu1"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle"
                >
                  SQL
                </a>
                <ul
                  aria-labelledby="dropdownSubMenu1"
                  className="dropdown-menu border-0 shadow"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      SQL Lab{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Saved Queries
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Query History
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Right navbar links */}
          <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
            <li class="nav-item dropdown dropdown-hover">
              <a
                id="dropdownSubMenu1"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="nav-link dropdown-toggle"
              >
                Input Data
              </a>
              <ul
                aria-labelledby="dropdownSubMenu1"
                class="dropdown-menu border-0 shadow"
              >
                {/* Level two dropdown*/}
                <li>
                  <a href="#" class="dropdown-item">
                    Create database
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item">
                    Connect Google Sheet
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item">
                    Upload CSV to database
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button type="button" class="btn btn-outline-light">
                INVITE USERS
              </button>
            </li>
            {/* Notifications Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-header">15 Notifications</span>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2" /> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2" /> 8 friend requests
                  <span className="float-right text-muted text-sm">
                    12 hours
                  </span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2" /> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div>
            </li>
            <li class="nav-item dropdown dropdown-hover">
              <a
                id="dropdownSubMenu1"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="nav-link dropdown-toggle"
              >
                Setting
              </a>
              <ul
                aria-labelledby="dropdownSubMenu1"
                class="dropdown-menu border-0 shadow"
              >
                <li>
                  <a href="#" class="dropdown-item">
                    Data access role
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item">
                    Row lavel Security
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item">
                    Database connection
                  </a>
                </li>
                <li class="dropdown-divider"></li>
                <li>
                  <Link to="/" class="dropdown-item">
                  Log Out
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      {/* /.navbar */}
    </div>
  );
}

export default Header;
