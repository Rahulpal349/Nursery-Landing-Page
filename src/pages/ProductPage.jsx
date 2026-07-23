import React, { useEffect } from 'react';
import ProductDetails from '../components/ProductDetails';
import ProductTabs from '../components/ProductTabs';
import ProductCareGuide from '../components/ProductCareGuide';
import ProductRelated from '../components/ProductRelated';
import Newsletter from '../components/Newsletter';

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-page" style={{ paddingTop: '80px', backgroundColor: '#fdfdfd' }}>
      <ProductDetails />
      <ProductTabs />
      <ProductCareGuide />
      <ProductRelated />
      <Newsletter />
    </div>
  );
};

export default ProductPage;
