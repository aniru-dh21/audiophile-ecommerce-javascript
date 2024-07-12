import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import "../styles/footer.css";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-nav">
          <img src={logo} alt="audiophile" className="footer-logo" />
          <ul className="footer-list">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="headphones" className="footer-link">
                Headphones
              </Link>
            </li>
            <li>
              <Link to="speakers" className="footer-link">
                Speakers
              </Link>
            </li>
            <li>
              <Link to="earphones" className="footer-link">
                Earphones
              </Link>
            </li>
          </ul>
        </div>

        <p className="footer-text">
          Audiophile is an all in one step to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we are open 7 days a week.
        </p>

        <div className="copyright">
          <p className="footer-text">Copyright 2021. All Rights Reserved</p>

          <ul className="social-list">
            <li>
              <Link className="footer-link social-link">
                <IoLogoFacebook />
              </Link>
            </li>
            <li>
              <Link className="footer-link social-link">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link className="footer-link social-link">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
