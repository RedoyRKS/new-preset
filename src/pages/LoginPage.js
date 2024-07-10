import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
    <section>
    <div className="login-box" style={{marginLeft:"500px",marginTop:"80px"}}>
  {/* /.login-logo */}
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a href="" className="h2 text-info"><b>Smart</b> Dashboard</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Enter Mobile Number or Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Enter Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div> */}
          {/* /.col */}
          <div className="col-4">
            <Link to="/main_home"><button type="submit" className="btn btn-primary btn-block">Sign In</button></Link>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center mt-2 mb-3">
        {/* <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a> */}
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
      </div>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      {/* <p className="mb-0">
        <a href="register.html" className="text-center">Register a new membership</a>
      </p> */}
    </div>
    {/* /.card-body */}
  </div>
  {/* /.card */}
</div>
<br></br>
<br></br>

<Footer></Footer>
</section>

    </div>
  );
}

export default LoginPage;

