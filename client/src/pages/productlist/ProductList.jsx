import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Announcement, Navbar, Products } from '../../components';
import "./productList.scss";

const ProductList = () => {
    const location = useLocation();
    // const cat = location.pathname.split("/")[2];
    const { category } = useParams();
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) =>{
        e.preventDefault();
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value, 
        });
    };

    return (
        <div className="pl__container">
            <Navbar />
            <Announcement />
            <h1 className="title">{category}</h1>
            <div className="filterContainer">
                <div className="filter">
                    <span className="filterText">Filter Products:</span>
                    <select name="color" id="colors" onChange={handleFilters}>
                        <option value="colors" disabled>Colors</option>
                        <option value="black">Black</option>
                        <option value="purple">Purple</option>
                        <option value="lightblue">LightBlue</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="pink">Pink</option>
                        <option value="cream">Cream</option>
                        <option value="orange">Orange</option>
                        <option value="red">Red</option>
                        <option value="gray">Gray</option>
                        <option value="brown">Brown</option>
                    </select>
                    <select name="size" id="sizes" onChange={handleFilters}>
                        <option value="size" disabled >Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div className="filter">
                    <span className="filterText">Sort Products:</span>
                    <select name="sort" id="sort" onChange={(e)=>setSort(e.target.value)}>
                        <option value="newest">Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products cat={category} filters={filters} sort={sort} />
        </div>
    )
}

export default ProductList