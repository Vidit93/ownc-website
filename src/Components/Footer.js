import React, { useState } from "react";
import "../Css/Footer.css"; // Assuming you have a separate CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6-center ml-3 mb-4 col-lg-4 mx-5">
            <div className="widget1">
              <div className="logo">
                <img
                  src="https://i.ibb.co/vLDyPtM/ak-logo-yellow.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <p>
                In eu libero ligula. Fusce eget metus lorem, ac viverra leo.
                Nullam convallis, arcu vel pellentesque sodales, nisi est varius
                diam, ac ultrices sem ante quis sem. Proin ultricies volutpat
                sapien.
              </p>
              {/* <div className="socialLinks">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mx-5 ">
            <div className="widget3">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
                <li>
                  <a href="#">privecy</a>
                </li>
                <li>
                  <a href="#">skills</a>
                </li>
                <li>
                  <a href="#">career</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mx-5">
            <div className="widget4">
              <h5>Other Links</h5>
              <ul>
                <li>
                  <a href="#">themeforest</a>
                </li>
                <li>
                  <a href="#">graphicriver</a>
                </li>
                <li>
                  <a href="#">codecanyon</a>
                </li>
                <li>
                  <a href="#">videohive</a>
                </li>
                <li>
                  <a href="#">redpen</a>
                </li>
                <li>
                  <a href="#">codepen</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRightArea">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p>© Copyright All rights reserved 2024.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
