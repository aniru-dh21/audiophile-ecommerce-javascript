import { useParams } from "react-router-dom";
import "../styles/category.css";
import Header from "../components/Header";
import data from "../data.json";
import CategoryCard from "../components/CategoryCard";
import Menu from "../components/Menu";
import About from "../components/About";

export default function Category() {
  let { category } = useParams();

  return (
    <>
      <Header>{category}</Header>
      <main className="container product-category-section">
        {data
          .filter((item) => item.category === category)
          .map((item) => (
            <CategoryCard key={item.id} product={item} />
          ))}
      </main>
      <aside className="container mb-[var(--spacing-l)] md:mb-[var(--spacing-xl)]">
        <Menu />
      </aside>
      <About />
    </>
  );
}
