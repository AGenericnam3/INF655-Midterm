import React from 'react';
import './app.css';
import Products from './components/products';

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Head of Lettuce',
      image: 'product1.jpg',
      price: 2.99,
    },
    {
      id: 2,
      name: 'Tomatoes',
      image: 'product2.jpg',
      price: 3.99,
    },
    {
      id: 3,
      name: 'Bag of Carrots',
      image: 'product3.jpg',
      price: 7.99,
    },
    {
      id: 4,
      name: 'Cucumber',
      image: 'product4.jpg',
      price: 2.99,
    },
    {
      id: 5,
      name: 'Green Beans',
      image: 'product5.jpg',
      price: 4.99,
    },
    // Add more products here
  ];

  return (
    <div className="App">
      <h1>My Online Store</h1>
      <Products products={products} />
    </div>
  );
};

export default App;