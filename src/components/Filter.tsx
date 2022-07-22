import { Product } from "../App";
import { data } from "../data/productsCategory.json";
import styles from "./Filter.module.css";

export type Category = {
  name: string;
  _id: string;
};

interface FilterInterface {
  categories: Category[];
  setProducts: (value: Product[]) => void;
}

export function Filter({ setProducts, categories }: FilterInterface) {
  const productsData = data.nodes as Product[];

  const filterProducts = (categoryName: string) => {
    const filteredProducts = productsData.filter(
      (product) => product.category.name === categoryName
    );

    setProducts(filteredProducts);
  };

  return (
    <aside className={styles.filtersContainer}>
      <h1>Categories</h1>
      <div className={styles.buttons}>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => filterProducts(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </aside>
  );
}
