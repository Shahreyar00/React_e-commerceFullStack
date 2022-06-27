import React from 'react';
import { Link } from 'react-router-dom';
import "./categoryItem.scss";

const CategoryItem = ({item}) => {
    return (
        <div className="cati__container">
            <img src={item.img} alt="item" />
            <div className="info">
                <h1 className="title">{item.title}</h1>
                <Link to={`/products/${item.cat}`}>
                    <button className="btn">SHOP NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default CategoryItem