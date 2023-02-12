import React from 'react';

const ItemList = ({items}) => {
    return (
        <ul>
            {items.map((item) => (
                <li>
                    {item.name} - {item.price}
                </li>
            ))}
        </ul>
    )
}

export default ItemList;