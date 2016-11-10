import React, { Component } from 'react';
import { Link } from 'react-router';

class CategoryList extends Component {
    render() {
        return(
            <ul className="category-list">
                <li className="category-list__category"><Link to="/category/asian">Asian</Link></li>
                <li className="category-list__category"><Link to="/category/british">British</Link></li>
                <li className="category-list__category"><Link to="/category/pub">Pub</Link></li>
                <li className="category-list__category"><Link to="/category/other">Other</Link></li>
            </ul>
        );
    }
}

export default CategoryList;

