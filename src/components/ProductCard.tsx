import { Product } from "../App";
import { FaTag } from "react-icons/fa";
import styles from "../components/ProductCard.module.css";

interface ProductCardInterface {
  product: Product;
}

export function ProductCard({ product }: ProductCardInterface) {
  return (
    <div className={styles.card}>
      <img src={product.images[0].asset.url} alt={product.images[0].alt} />
      <div className={styles.info}>
        <strong>{product.name}</strong>
        <span>
          <FaTag color="#283aa3" size={20} /> {product.category.name}
        </span>
        <p>{product.shortDescription}</p>
      </div>
    </div>
  );
}
