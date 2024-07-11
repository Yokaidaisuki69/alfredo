import "./Portfolio.css";
import Navbar from "./Navbar";
import M from "../img/calc.png";
import M1 from "../img/web.png";
import M2 from "../img/java1.jpeg";
import M3 from "../img/OIP.jpeg";
import M4 from "../img/html4.png";

const Portfolio = () => {
  return (
    <>
      <Navbar />
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
      <section id="portfolio1">
        <div className="container mt-2">
          <div className="pb-5 mt-"></div>
          <h1 className="fw-bold display-2 text-center">
            <p>PROJECTS</p>
          </h1>
        </div>
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
      <section id="meainfo">
        <div className="container text-center">
          <div className="row">
            <div className="col mt-5">
              <a href="">
                <img src={M}></img>
                <h4> Calculator</h4>
              </a>
              <h4>
                {" "}
                A calculator is a device that performs arithmetic operations on
                numbers. Basic calculators can do only addition, subtraction,
                multiplication and division mathematical calculations.
              </h4>
            </div>
          </div>
        </div>
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
      <section id="meainfo">
        <div className="container text-center">
          <div className="row">
            <div className="col mt-5">
              <a href="">
                <img src={M1}></img>
                <h4> My Website</h4>
              </a>
              <h4>
                A website is a collection of many web pages, and web pages are
                digital files that are written using HTML(HyperText Markup
                Language). To make your website available to every person in the
                world, it must be stored or hosted on a computer connected to
                the Internet round a clock. Such computers are known as a Web
                Server.
              </h4>
            </div>
          </div>
        </div>
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
      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3 mt-3">
              <div className="card p-3 shadow">
                <img src={M4} alt="" />
                <h4 className="text-center">HTML</h4>
                <p>
                  HTML is the standard markup language for creating Web pages.
                  Learn what HTML stands for, how it describes the structure of
                  a Web page, and how to write HTML elements and documents.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3 mt-3">
              <div className="card p-3 shadow">
                <img src={M2} alt="" />
                <h4 className="text-center">JAVA</h4>
                <p>
                  Java is a popular programming language, created in 1995, that
                  runs on different platforms and devices. It is used for
                  various applications, such as Android apps, web servers,
                  games, and more. Learn Java basics and get started with
                  W3Schools.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3 mt-3">
              <div className="card p-3 shadow">
                <img src={M3} alt="" />
                <h4 className="text-center">Visual Studio Code</h4>
                <p>
                  Microsoft created Visual Studio Code (VS Code), a free source
                  code editor available for Linux, macOS, and Windows. Because
                  of its many features, adaptability, and customizable nature,
                  it has swiftly become one of the most well-liked code editors
                  among developers.
                </p>
              </div>
            </div>
          </div>
        </div>
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
      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Copyright By
              <a href="">cadientealjun@gmail</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
