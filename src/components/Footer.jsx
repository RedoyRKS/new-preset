import React from "react";

function Footer() {
  return (
    <div>
      <div>
        <footer className="main-footer bg-dark">
          <img
            src="../../dist/img/smart_dashboard_logo.png"
            alt="smart Logo"
            className="brand-image"
            style={{ opacity: "1.2", height: "50px", width: "50px" }}
          />
          <strong style={{ marginLeft: "10px" }}>Smart Dashboard</strong>
          <strong style={{ marginLeft: "120px" }}>
            Focal Person | Privacy Policy © 2024 a2i.All Rights Reserved.{" "}
            <a href="https://dashboard.gov.bd/en/">Smart Dashboard</a>.
          </strong>
          <div className="float-right d-none d-sm-inline-block">
            <img
              src="../../dist/img/a2i-Logo-set.png"
              alt="smart Logo"
              className="brand-image"
              style={{ opacity: "1.2", height: "70px" }}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
