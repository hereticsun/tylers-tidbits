import React from 'react';

const RestaurantItem = (restaurant) => {
  const r = restaurant.restaurant;
  return (
    <li key={r.id} className="restaurant-item">
        <h3>{r.name}</h3>
        <ul>
            <li>{r.stars} Stars</li>
            <li>{r.walking}mins to walk</li>
        </ul>

    </li>
  )
};

export default RestaurantItem;