import "./Experience.css";
import Navbar from "./Navbar";

import ojt1 from "../img/j6.jpg";
import ojt2 from "../img/j5.jpg";
import ojt3 from "../img/j1.jpg";
import ojt4 from "../img/j4.jpg";
import ojt5 from "../img/j2.jpg";
import ojt6 from "../img/j3.jpg";

const Experience = () => {
  return (
    <>
      <Navbar />

      <section id="portfolio">
        <svg
          className="air-waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
          </g>
          <g className="wave2">
            <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
          </g>
          <g className="wave3">
            <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
          </g>
        </svg>
        <div className="container mt-1">
          <div className="pb-5 mt-"></div>
          <h1 className="fw-bold display-2 text-center mt-0 pt-1">
            <p>Experiences</p>
          </h1>
        </div>
        <svg
          className="air-waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
          </g>
          <g className="wave2">
            <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
          </g>
          <g className="wave3">
            <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
          </g>
        </svg>

        <section id="photos">
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="card align-items-center">
                <h4 className="ms-3 mt-3">On-The-Job Training (OJT)</h4>
              </div>
              <section id="info">
                <div className="container">
                  <div className="row">
                    <div className="col-lg mb-3 mt-3">
                      <div className="card p-3 shadow">
                        <h4 className="text-center">
                          {" "}
                          <i>
                            <strong>OCTOBER-NOVEMBER</strong>
                          </i>
                        </h4>
                        <h5 className="text text-center">Activities</h5>

                        <div className="col text-center">
                          <img src={ojt2}></img>
                          <img src={ojt3}></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg mb-3 mt-3">
                      <div className="card p-3 shadow">
                        <h4 className="text-center">
                          {" "}
                          <i>
                            <strong>DECEMBER</strong>
                          </i>
                        </h4>
                        <h5 className="text text-center">Activities</h5>
                        <div className="col text-center">
                          <img src={ojt1}></img>
                          <img src={ojt4}></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg mb-3 mt-3">
                      <div className="card p-3 shadow">
                        <h4 className="text-center">
                          {" "}
                          <i>
                            <strong>JANUARY-FEBRUARY</strong>
                          </i>
                        </h4>
                        <h5 className="text text-center">Activities</h5>
                        <div className="col text-center">
                          <img src={ojt5}></img>
                          <img src={ojt6}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>

      <svg
        className="air-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <section id="info2">
        <div className="container text-center">
          <div className="col mb-3 mt-5">
            {" "}
            <div className="card align-items-center">
              <h4 className="ms-3 mt-3">
                Activities during On The Job Training (OJT)
              </h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <h4 className="text-center">MULTIMEDIA</h4>
                    <p className="text-tertiary">
                      On the first two week of our OJT, we were asked to make 
                      a video presentation about the launcing of the NC II
                      program on Sugar Processing in Mabinay.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <h4 className="text-center">
                      OFFICE SYSTEM MANAGEMENT
                    </h4>
                    <p className="text-tertiary">
                      Rearranging and cleaning all the computers in the Computer 
                      Laboratory, Helping input the teacher’s evaluation rating,
                      Assisting the students in using the computers for their examination.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <h4 className="text-center">NETWORKING</h4>
                    <p className="text-tertiary">
                      Patching the UTP cable, Cleaning the computers from the computer laboratory,
                      Cleaning and maintaining one of the guard posts where the server for the Student 
                      Tracking System is located. 
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="col-lg mb-3 mt-3"></div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span>
              <a href="">cadientealjun@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;
