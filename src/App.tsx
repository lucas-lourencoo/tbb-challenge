import { useEffect, useState } from "react";
import { Category, Filter } from "./components/Filter";
import { ProductCard } from "./components/ProductCard";
import { data } from "./data/data.json";
import styles from "./App.module.css";
import "./styles/global.css";

export type Product = {
  name: string;
  shortDescription: string;
  id: string;
  images: [
    {
      alt: string;
      src: string;
    }
  ];
  category: Category;
};

export function App() {
  const [products, setProducts] = useState(data.nodes as Product[]);

  return (
    <main className={styles.container}>
      <Filter setProducts={setProducts} />
      <div className={styles.cardGrid}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
}
