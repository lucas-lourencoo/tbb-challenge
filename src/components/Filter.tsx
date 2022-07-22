import { useEffect, useState } from "react";
import { Product } from "../App";
import { data } from "../data/data.json";

export type Category = {
  name: string;
  id: string;
};

interface FilterInterface {
  setProducts: (value: Product[]) => void;
}

export function Filter({ setProducts }: FilterInterface) {
  const [categories, setCategories] = useState([] as Category[]);
  const productsData = data.nodes as Product[];

  useEffect(() => {
    const categoriesOfProductsFiltered = new Map();

    const categoriesOfProducts = productsData.map(
      (product) => product.category
    );

    categoriesOfProducts.map((category) => {
      if (!categoriesOfProductsFiltered.has(category)) {
        categoriesOfProductsFiltered.set(category.id, category);
      }
    });

    setCategories([...categoriesOfProductsFiltered.values()]);
  }, []);

  const filterProducts = (categoryId: string) => {
    const filteredProducts = productsData.filter(
      (product) => product.category.id === categoryId
    );

    setProducts(filteredProducts);
  };

  return (
    <aside>
      <h1>Filters</h1>
      {categories.map((category) => (
        <button key={category.id} onClick={() => filterProducts(category.id)}>
          {category.name}
        </button>
      ))}
    </aside>
  );
}
