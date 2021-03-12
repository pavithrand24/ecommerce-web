import React from 'react';

import ProductList from '../containers/ProductList';

const Home = () => {
  return (
    <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>               
            </div>
        </div>
  );
};

export default Home;
