import { useEffect, useState } from "react";
import { Category, Filter } from "./components/Filter";
import { ProductCard } from "./components/ProductCard";
import { data } from "./data/productsCategory.json";
import styles from "./App.module.css";
import "./styles/global.css";

export type Product = {
  name: string;
  shortDescription: string;
  id: string;
  images: [
    {
      alt: string;
      asset: {
        url: string;
      };
    }
  ];
  category: Category;
};

export function App() {
  const productsData = data.nodes as Product[];
  const [products, setProducts] = useState(productsData);
  const [categories, setCategories] = useState([] as Category[]);

  useEffect(() => {
    const categoriesOfProductsFiltered = new Map();

    const categoriesOfProducts = productsData.map(
      (product) => product.category
    );

    categoriesOfProducts.map((category) => {
      if (!categoriesOfProductsFiltered.has(category)) {
        categoriesOfProductsFiltered.set(category.name, category);
      }
    });

    setCategories([...categoriesOfProductsFiltered.values()]);
  }, []);

  return (
    <main className={styles.container}>
      <Filter setProducts={setProducts} categories={categories} />
      <section className={styles.productsCards}>
        <h2>Resultados: {products.length} produtos</h2>
        <div className={styles.cardGrid}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
