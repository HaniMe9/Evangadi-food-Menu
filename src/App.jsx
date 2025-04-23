import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FoodItem from './components/FoodItem/FoodItem';
import { menu } from './assets/data';

function App() {
  return (
    <div className="foods-container">
      <Header />

      <div className="grid-food">
        {menu.map((item) => (
          <FoodItem key={item.id} foodData={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
