import Header from "../components/header";
import heroImg from "../assets/hero-img.png";
import { Link } from "react-router-dom";
import "../assets/style.css";
import ModalWelcome from "../components/modal.welcome";

export default function LandingPage() {
  return (
    <>
      <ModalWelcome />
      <Header />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="headlines">
                Better Solutions For Your Business
              </div>
              <div className="quote">
                We are team of talented designers making websites with Bootstrap
              </div>
              <div className="btn-one">
                <button className="btn-get" type="button">
                  <Link to="/create-product">Create Product</Link>
                </button>
                <button className="btn-watch" type="button">
                  Watch Video
                </button>
              </div>
            </div>
            <div className="col-6">
              <img src={heroImg} className="img-fluid" alt="hero-img" />
            </div>
          </div>
        </div>
      </main>
      <div className="bottom-sec">
        <h3>Join Our Newsletter</h3>
        <p>
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <div className="subs-form p-1">
          <input
            className="form-control-lp"
            type="text"
            aria-label="default input example"
          />
          <button className="btn btn-primary subs p-2" type="button">
            Subscribe
          </button>
        </div>
      </div>
      <div className="bottom">
        <div className="container-fluid">
          <div className="row row-md-4">
            <div className="col card-1">
              <h2>ARSHA</h2>
              <p>A 108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
              <div className="phone">
                <b>Phone:</b> +1 5589 55488 55
              </div>
              <div className="email">
                <b>Email:</b> info@example.com
              </div>
            </div>
            <div className="col card-2">
              <h2>Useful Links</h2>
              <a href="/#">Home</a>
              <a href="/#">About us</a>
              <a href="/#">Services</a>
              <a href="/#">Terms of service</a>
              <a href="/#">Privacy Policy</a>
            </div>
            <div className="col card-3">
              <h2>Our Services</h2>
              <a href="/#">Web Design</a>
              <a href="/#">Web Development</a>
              <a href="/#">Product Management</a>
              <a href="/#">Marketing</a>
              <a href="/#">Graphic Design</a>
            </div>
            <div className="col card-4">
              <h2>Our Social Network</h2>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="ellipse-group">
                <div className="ellipse-a" />
                <div className="ellipse-b" />
                <div className="ellipse-c" />
                <div className="ellipse-d" />
                <div className="ellipse-e" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="left-footer">
          © Copyright <b>Arsha</b>. All Rights Reserved
        </div>
        <div className="right-footer">
          Designed by <a href="/#">BootstrapMade</a>
        </div>
      </footer>
    </>
  );
}
