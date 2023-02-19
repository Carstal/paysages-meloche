import React, { useState } from 'react';

const ItemForm = ({ addItem }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    const parsedPrice = parseFloat(price).toFixed(2);
    const subName = document.getElementById('itemName').value;
    const subPrice = document.getElementById('itemPrice').value;
    if (name.length > 0 && isNaN(parsedPrice) != true && parsedPrice >= 0){
        // const parsedPrice = parseFloat(price).toFixed(2);
        document.getElementById("error").style.display="none";
        addItem(name,parsedPrice);
        setName('');
        setPrice('');
    }
    else{
        var errMsg = "Invalid entry in price field: ";
        if(isNaN(parsedPrice) == true){
            errMsg += "Please enter a number";
        }
        else if(parsedPrice < 0){
            errMsg += "Please enter a positive number";
        }
        else{
            errMsg += "Field was left empty";
        }
        document.getElementById("error").innerText = errMsg;
        document.getElementById("error").style.display = "block";
    }
    };

    return (
    <form onSubmit={handleSubmit}>
        <div id="error" hidden>Invalid entry in price field:</div>
        <input
        type="text"
        id='itemName'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add Item"
        />
        <input
        type="text"
        id='itemPrice'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        />
        <button type='submit'>Add Item</button>
    </form>
    );
};

export default ItemForm;