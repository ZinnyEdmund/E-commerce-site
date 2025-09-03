import React, { useEffect, useState } from 'react';
import styles from '../FeaturedPost/FeaturedPost.module.css';
import { useGetProductsQuery } from '../Features/Products/productApiSlice';

interface Product {
  id: number;
  thumbnail: string; 
}

const BestSellers: React.FC = () => {
  const { data, error, isLoading, refetch } = useGetProductsQuery();
  const [shuffledProducts, setShuffledProducts] = useState<Product[]>([]);

  // Shuffle and pick 10 products
  const shuffleProducts = React.useCallback(() => {
    if (data?.products) {
      const shuffled = [...data.products].sort(() => 0.5 - Math.random()).slice(0, 10);
      setShuffledProducts(shuffled);
    }
  }, [data]);

  useEffect(() => {
    shuffleProducts();
  }, [data, shuffleProducts]);

  const handleLoadMore = async () => {
    await refetch(); // Re-fetch data from API
    shuffleProducts(); // Shuffle again after refetch
  };

  return (
    <section>
      <div className={styles['BestSeller-container']}>
        <div className={styles["BestSeller-products-header"]}>
          <h4 className={styles['myH4']}>Featured Products</h4>
          <h2 className={styles['myH2']}>BESTSELLER PRODUCTS</h2>
          <p className={styles['myP']}>Problems trying to resolve the conflict between </p>
        </div>

        {error && <div className={styles['error-message']}>Error fetching products</div>}
        {isLoading && <div className={styles['loading']}>Loading...</div>}

        <div className={styles["BestSeller-products-grid"]}>
          {shuffledProducts.map(product => (
            <div key={product.id} className={styles['BestSeller-products-card']}>
              <img src={product.thumbnail} alt={product.thumbnail} />
              <div className={styles['BestSeller-product-details']}>
                <h4 className={styles["BestSeller-product-title"]}>Graphic Designer</h4>
                <p className={styles["BestSeller-product-description"]}>English Deparment</p>
                <p className={styles["Price-tag"]}>$16.48 <span className={styles["BestSeller-product-price"]}>$6.48</span></p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles['BestSeller-products-button']}>
          <button 
            onClick={handleLoadMore}
            disabled={isLoading}
            className={styles["load-more-button"]}
          >
            {isLoading ? 'LOADING...' : 'LOAD MORE PRODUCTS'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
