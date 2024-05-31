import React from 'react';
import Card from './card';

function CategoryRow({ title }) {
  return (
    <div className="category-row">
      
      <div id='bcard'>
        <h2>{title}</h2>
        <Card title="Air conditioners" />
        <Card title="Refrigerators" />
        <Card title="Microwave ovens" />
        <Card title="Washing machines" />
      </div>
    </div>
  );
}

export default CategoryRow;
