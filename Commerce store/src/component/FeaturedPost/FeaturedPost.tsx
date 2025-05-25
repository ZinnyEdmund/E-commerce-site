import React, { useEffect, useState } from 'react';
import '../FeaturedPost/FeaturedPost.css';

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
}

const BestSellers: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // holds the 10 products
  const [refreshKey, setRefreshKey] = useState(0); // used to trigger refresh

  // Function to fetch products from DummyJSON
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();

      // Shuffle and select 10 random products
      const shuffled = [...data.products].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 10);
      setProducts(selected);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch products whenever refreshKey changes
  useEffect(() => {
    fetchProducts();
  }, [refreshKey]);

  // Function to trigger refresh
  const handleLoadMore = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <section>
        <div className='BestSeller-container'>
            <div className="BestSeller-products-header">
                <h4 className='myH4'>Featured Products</h4>
                <h2 className='myH2'>BESTSELLER PRODUCTS</h2>
                <p className='myP'>Problems trying to resolve the conflict between </p>
            </div>

            <div className="BestSeller-products-grid">
                {products.map(product => (
                <div key={product.id} className='BestSeller-products-card'>
                    {/* Display product image, title, and price */}
                    <img src={product.thumbnail} alt={product.title} className='BestSeller-component' />
                    <div className='BestSeller-product-details'>
                        <h4 className='BestSeller-product-title'>{product.title}</h4>
                        <p className='BestSeller-product-description'>{product.description}</p>
                        <p className='BestSeller-product-price'><span className='Price-tag'>$16.48</span>${product.price}</p>
                    </div>
                   
                </div>
                ))}
            </div>

            <div className='BestSeller-products-button'>
                {/* Button to load more products */}
                <button onClick={handleLoadMore} className="load-more-button">LOAD MORE PRODUCTS</button>
            </div>
        </div>
    </section>
  );
};

export default BestSellers;