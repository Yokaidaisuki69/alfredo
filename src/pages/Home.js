import "./Home.css";

import M1 from "../img/aljun1.png";
import C1 from "../img/a-3.jpg";
import C2 from "../img/j6.jpg";
import C3 from "../img/c1.000.webp";
import C4 from "../img/j3.jpg";
import C5 from "../img/j5.jpg";
import C6 from "../img/j1.jpg";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold">
                        <i>Hi, I'm</i>
                      </h1>
                      <h1 className="text display-4 fw-bold">
                        <i>ALFREDO JR. L. CADIENTE</i>
                      </h1>
                      <br />
                      <p className="self text-dark fw-bold">
                        I'm an IT student at Central Philippines State University
                      </p>
                      <a
                        href="/Experience"
                        className="btn btn-brand shadow mt-5"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img src={M1} alt="ALFREDO JR CADIENTE" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>{" "}
      <section id="info1">
        <div class="section-heading text-center mb-1 ">
          <h1>
            <p>Gallery</p>
          </h1>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <img src={C1}></img>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <img src={C3}></img>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <img src={C2}></img>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <img src={C5}></img>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <img src={C4}></img>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <img src={C6}></img>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Copyright by
              <a href=""> cadientealjun@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
