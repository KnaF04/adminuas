// NewItemForm.js
import React, { useState } from 'react';

const NewItemForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  // handle form submission here

  return (
    <form>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" />
      <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
      <input type="number" value={stock} onChange={e => setStock(e.target.value)} placeholder="Stock" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewItemForm;