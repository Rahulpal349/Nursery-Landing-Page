import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import ProductRelated from '../components/ProductRelated';
import { getPlantById } from '../utils/plantStorage';

const ProductPage = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchedPlant = getPlantById(id);
    setPlant(fetchedPlant);
  }, [id]);

  if (!plant) {
    return (
      <div className="product-page" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Plant not found</h2>
        <p>Sorry, the plant you are looking for does not exist.</p>
        <Link to="/plants" style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>Back to all plants</Link>
      </div>
    );
  }

  return (
    <div className="product-page" style={{ paddingTop: '80px', backgroundColor: '#fdfdfd' }}>
      <ProductDetails plant={plant} />
      <ProductRelated />
    </div>
  );
};

export default ProductPage;
