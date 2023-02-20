import React, { useState } from 'react';
import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';

const TestPage = () => {
const [items, setItems] = useState([]);

const addItem = (name, price) => {
setItems([...items, { id: items.length + 1, name, price }]);
};

const deleteItem = (id) => {
setItems(items.filter((item) => item.id !== id));
};

return (
<div>
<ItemForm addItem={addItem} />
<ItemList items={items} deleteItem={deleteItem} />

<form action="/api/quote/newQuote" method="POST">
            <input name="userID" value="24" hidden/>
            <input name="projectID" value="24" hidden/>
            <input name="items" value={items} hidden/>
            <button type="submit">Submit Invoice</button>
        </form>
</div>
);
};

export default TestPage;