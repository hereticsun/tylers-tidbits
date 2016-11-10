import React from 'react';
import RestaurantItem from '../restaurant-item/restaurant-item';

const RestaurantList = (props) => {
  const restaurants = props.restaurants.restaurants;
  console.log('Restaurant list', restaurants);
  if(restaurants){
      const restaurantItems = restaurants.map((restaurant) => {
        return <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      });

      return (
        <ul className="restaurant-list">{restaurantItems}</ul>
      );
  }

  return (
      <div className="warning"><p>No restaurants were found.</p></div>
  );
};

export default RestaurantList;