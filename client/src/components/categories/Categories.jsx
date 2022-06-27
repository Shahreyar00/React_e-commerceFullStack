import React from 'react';
import { categories } from '../../data';
import CategoryItem from '../categoryItem/CategoryItem';
import "./categories.scss";

const Categories = () => {
    return (
        <div className="cat__container">
            {categories.map((item)=>(
                <CategoryItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Categories