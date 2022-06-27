import React from 'react';
import "./product.scss";
import Search from '@mui/icons-material/Search';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
    return (
        <div className="p__container">
            <div className="circle"></div>
            <img src={item.img} alt="item shown" />
            <div className="info">
                <div className="icon">
                    <ShoppingCartOutlined className="p__icon" />
                </div>
                <div className="icon">
                    <Link className="link" to={`/product/${item._id}`}>
                        <Search className="p__icon" />
                    </Link>
                </div>
                <div className="icon">
                    <FavoriteBorderIcon className="p__icon" />
                </div>
            </div>
        </div>
    )
}

export default Product