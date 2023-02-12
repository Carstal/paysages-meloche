import React, { useState } from 'react';

const ItemForm = ({ addItem }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addItem(name,price);
    setName('');
    setPrice('');
    };

    return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add Item"
        />
        <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        />
        <button type='submit'>Add Item</button>
    </form>
    );
};

export default ItemForm;