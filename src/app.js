import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Products from './components/products';
import {LightModeProvider} from 'context/LightModeContext';
import {DarkModeProvider} from 'context/DarkModeContext';

const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

ReactDOM.render(
  <React.StrictMode>
    <LightModeProvider>
      <App />
    </LightModeProvider>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

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

function App() {
  const [theme, setTheme] = useState('light'); // Default theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Your app components */}
    </ThemeContext.Provider>
  );
}

export default App;