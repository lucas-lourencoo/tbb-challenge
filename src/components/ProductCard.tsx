import { Product } from "../App";
import styles from "../components/ProductCard.module.css";

interface ProductCardInterface {
  product: Product;
}

export function ProductCard({ product }: ProductCardInterface) {
  return (
    <div className={styles.card}>
      <img src={product.images[0].src} alt={product.images[0].alt} />
      <div className={styles.info}>
        <span>Category: {product.category.name}</span>
        <strong>{product.name}</strong>
        <p dangerouslySetInnerHTML={{ __html: product.shortDescription }}></p>
      </div>
    </div>
  );
}
