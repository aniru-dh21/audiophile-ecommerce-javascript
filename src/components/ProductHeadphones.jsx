import hero from "../assets/home/mobile/image-header.jpg";
import heroDesktop from "../assets/home/desktop/image-hero.jpg";
import heroTablet from "../assets/home/tablet/image-header.jpg";
import "../styles/productHeadphones.css";
import { Link } from "react-router-dom";

function ProductHeadphones() {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <picture>
          <source media="(min-width: 1024px)" srcSet={heroDesktop} />
          <source media="(min-width: 640px)" srcSet={heroTablet} />
          <img src={hero} alt="" />
        </picture>
      </div>

      <div className="hero-content">
        <p className="overline-text">new product</p>
        <h1 className="heading-1 hero-heading">xx99 mark ii headphones</h1>
        <p className="base-text hero-text">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <Link
          to="headphones/xx99-mark-two-headphones"
          className="btn btn--primary"
        >
          see product
        </Link>
      </div>
    </section>
  );
}

export default ProductHeadphones;
