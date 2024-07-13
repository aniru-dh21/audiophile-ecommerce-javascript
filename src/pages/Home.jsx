import "../styles/home.css";
import ProductHeadphones from "../components/ProductHeadphones";
import Menu from "../components/Menu";
import ProductSpeaker from "../components/ProductSpeaker";
import ProductEarphones from "../components/ProductEarphones";
import About from "../components/About";

function Home() {
  return (
    <>
      <header>
        <ProductHeadphones />
      </header>
      <aside className="container mb-[var(--spacing-l)] md:mb-[var(--spacing-xl)]">
        <Menu />
      </aside>
      <main className="container main-section">
        <ProductSpeaker />
        <ProductEarphones />
      </main>
      <About />
    </>
  );
}

export default Home;
