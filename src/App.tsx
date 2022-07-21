import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { ProductCard } from "./components/ProductCard";
import { data } from "./data/data.json";
import styles from "./App.module.css";
import "./styles/global.css";

export function App() {
  const [products, setProducts] = useState(data.nodes);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesOfProducts = products.map((product) => product.category);
    const categoriesOfProductsFiltered = categoriesOfProducts.filter(
      (category, position) => categoriesOfProducts.indexOf(category) == position
    );
  }, []);

  return (
    <main className={styles.container}>
      <Filter categories={categories} />
      <div className={styles.cardGrid}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
}
