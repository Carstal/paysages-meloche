import React, { useState } from 'react';
import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';

const TestPage = () => {
const [items, setItems] = useState([]);

const addItem = (name, price) => {
setItems([...items, { name, price }]);
};

const deleteItem = (id) => {
setItems(items.filter((item) => item.id !== id));
};

const pairs = {}
items.forEach((item)=>(
    pairs[item.name] = item.price
))

return (
<div>
<ItemForm addItem={addItem} />
<ItemList items={items} deleteItem={deleteItem} />

<form action="/api/quote/newQuote" method="POST">
            <input name="userID" value="24" hidden/>
            <input name="projectID" value="24" hidden/>
            <input name="items" value={JSON.stringify(pairs)} hidden/>
            <button type="submit">Submit Invoice</button>
        </form>
</div>
);
};

export default TestPage;