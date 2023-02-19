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
        var errMsg = "Invalid entry: <ul>";
        if(name.length == 0){
            errMsg += "<li>Please enter an item name</li>";
        }
        if(isNaN(parsedPrice) == true){
            errMsg += "<li>Please enter a number in price field</li>";
        }
        else if(parsedPrice < 0){
            errMsg += "<li>Please enter a positive number</li>";
        }
        else{
            errMsg += "<li>Field was left empty</li>";
        }
        errMsg += "</ul>";
        document.getElementById("error").innerHTML = errMsg;
        document.getElementById("error").style.display = "block";
    }
    };

    return (
    <form onSubmit={handleSubmit}>
        <div id="error" hidden></div>
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